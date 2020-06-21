(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.data.movie_count > 0) {
      return data;
    }
    throw new Error('No se encontró ningún resultado');
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring');

  function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }
  const BASE_API = 'https://yts.mx/api/v2/';

  function featuringTemplate(peli) {
    return (
    `
    <div class="featuring">
      <div class="featuring-image">
        <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
      </div>
      <div class="featuring-content">
        <p class="featuring-title">Pelicula encontrada</p>
        <p class="featuring-album">${peli.title}</p>
      </div>
    </div>
    `
    );
  }
  
  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $home.classList.add('search-active');
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);

    const data = new FormData($form);
    // Manejo de error con try-catch
    //(inicio)
    try {
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`);
      
      const HTMLString = featuringTemplate(pelis[0]);
      $featuringContainer.innerHTML = HTMLString;
    } catch(error) {
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active');
    }
    //(fin)
  })

  function videoItemTemplate(movie, category) {
    return (
      `
      <div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
      <div class="primaryPlaylistItem-image">
      <img src="${movie.medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title">
      ${movie.title}
      </h4>
      </div>
      `
      );
  }
  
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      showModal($element);
    })
  }
  
  function renderMovieList(list, $container, category) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      // Se agrego un evento 'load' para traer las imagenes ya cargadas 
      //(inicio)
      const image = movieElement.querySelector('img');
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn');
      })
      //(fin)
      addEventClick(movieElement);
    })
  }

  const BASE_API_PEOPLE = 'https://randomuser.me/api/';

  async function getPeople(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  function ratingItemTemplate(movie) {
    return(
      `
      <li class="myPlaylist-item">
        <a href="#">
          <span>
            ${movie.title}
          </span>
        </a>
      </li>
      `
    );
  }

  function renderRatingList(list, $container) {
    list.forEach((movie) => {
      const HTMLString = ratingItemTemplate(movie);
      const ratingElement = createTemplate(HTMLString);
      $container.append(ratingElement);
    })
  }
  
  function peopleItemTemplate(person) {
    return (
      `
      <li class="playlistFriends-item">
        <a href="#">
          <img src="${person.picture.thumbnail}" alt="profile image" />
          <span>
            ${person.name.title} ${person.name.first} ${person.name.last}
          </span>
        </a>
      </li>
      `
    );
  }

  function renderPeopleList(list, $container) {
    list.forEach((person) => {
      const HTMLString = peopleItemTemplate(person);
      const peopleElement = createTemplate(HTMLString);
      $container.append(peopleElement)
    })
  }
  
  const { data: {movies: ratingList} } = await getData(`${BASE_API}list_movies.json?minimum_rating=9&limit=10`);
  const $ratingContainer = document.querySelector('.myPlaylist');
  renderRatingList(ratingList, $ratingContainer);

  const { results: peopleList } = await getPeople(`${BASE_API_PEOPLE}?results=10`);
  const $peopleContainer = document.querySelector('.playlistFriends');
  renderPeopleList(peopleList, $peopleContainer);

  //funcion para validar si existe o las listas en el localStorage
  async function cacheExist(category) {
    const listName = `${category}List`;
    const cacheList = window.localStorage.getItem(listName);
    if (cacheList) {
      //Reto: si los datos existen en cache los muestra
      // pero los vuelve a actualizar para la siguiente recarga
      setTimeout(async () => {
        const { data: {movies: data} } = await getData(`${BASE_API}list_movies.json?genre=${category}`);
      }, 1000);
      return JSON.parse(cacheList);
    } else {
      const { data: {movies: data} } = await getData(`${BASE_API}list_movies.json?genre=${category}`);
      window.localStorage.setItem(listName, JSON.stringify(data));
      return data;
    }
  }
  
  //const { data: {movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`);
  const actionList = await cacheExist('action');
  //window.localStorage.setItem('actionList', JSON.stringify(actionList));
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const dramaList = await cacheExist('drama');
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');
  
  const animationList = await cacheExist('animation');
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');
  
  function findByID(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10))
  }
  
  function findMovie(id, category) {
    switch (category) {
      case 'action': {
        return findByID(actionList, id);
      }
      case 'drama': {
        return findByID(dramaList, id);
      }
      default: {
        return findByID(animationList, id);
      }
    }
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);
    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src', data.medium_cover_image);
    $modalDescription.textContent = data.description_full;
  }

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})()

