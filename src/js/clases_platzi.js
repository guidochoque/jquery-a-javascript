/* 
// clase 4 - Variables y funciones
console.log('Hola mundo')

// variables que NO van a CAMBIAR ren el tiempo
const noCambia = "Leonidas"

// variables que van a CAMBIAR en el tiempo
let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
} */

/*
// Clase 5 - Promesas
  const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un API
  // timers de javascript : setInterval, setTimeout
  setTimeout(function() {
    // luego de 5 segundos
    todoBien('Se acabó el tiempo 5')
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  setTimeout(function() {
    todoBien('Se acabó el tiempo 3')
  }, 3000)
})

//getUser
//  .then(function() {
//    console.log('Todo está bien en la vida')
//  })
// .catch(function(message) {
//    console.log(message)
//  })

Promise.race([
  getUser,
  getUserAll,
])
.then(function(message) {
  console.log(message)
})
.catch(function(message) {
  console.log(message)
}) */




/* 
// Clase 6 - Tutorial de Ajax en jQuery y Javascript
// Obtencion de datos de un API con jQuery Ajax
// En realidad es un XMLHttpRequest
$.ajax('https://randomuser.me/api/dasdasd', {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function(error) {
    console.log(error)
  }
})


// Se usa Fetch('',configuracion) para traer datos
fetch('https://randomuser.me/api/asdasd')
  .then(function(response) {
    //console.log(response)
    return response.json()
  })
  .then(function(user) {
    console.log('user', user.results[0].name.first)
  })
  .catch(function() {
    console.log('Algo falló')
  }) */




/*
// Clase 7 - Funciones asíncronas
// async function load() {
  //await
//}
//forma normal de llamar una funcion
//load()
//forma: envolver funcion y auto ejecutarse
(async function load() {
  //await
  //action
  //terror
  //animation
  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)

// Otra forma de llamar un PROMISE con una funcion ASINCRONA
//  getData('https://yts.mx/api/v2/list_movies.json?genre=terror')
//    .then(function(data) {
//      console.log('terrorList', data)
//    })
})()
 */



// Clase #8 - Selectores
/* (async function load() {
  //await
  //action
  //terror
  //animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList)

  const $actionContainer = document.querySelector('#action');
  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.getElementById('#animation');

  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');
  

  //const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');
})() */




/* 
// Clase #9 - Creación de templates
(async function load() {
  //await
  //action
  //terror
  //animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList)

  function videoItemTemplate(movie) {
    // Esto es un template para el DOM
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  //  console.log(videoItemTemplate('src/images/bitcoin.jpg', 'bitcoin'));
  actionList.data.movies.forEach((movie) => {
    //debugger
    const HTMLString = videoItemTemplate(movie);
    console.log(HTMLString);
  })

  const $actionContainer = document.querySelector('#action');
  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.getElementById('#animation');

  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');

  //const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

})() */



/* 
// Clase #10 - Creación de DOM
// como agregar contenido html a nuestro sitio web
// convertir de string a elemento html para agregar a nuestra web
(async function load() {
  //await
  //action
  //terror
  //animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList)

  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }

  const $actionContainer = document.querySelector('#action');
  actionList.data.movies.forEach((movie) => {
    const HTMLString = videoItemTemplate(movie);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    $actionContainer.append(html.body.children[0])
    console.log(HTMLString);
  })

  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.getElementById('#animation');

  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

})() */





/* 
// Clase #11 - Reutilizando funciones
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList)

  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    );
  }

  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
 
  function renderMovieList(list, $container) {
    // actionList.data.movies = list
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer)

  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

})() */



/* 
// Clase #12 - Clases y estilos CSS
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }
  const $form = document.getElementById('form');
  $form.addEventListener('submit', (event) => {
    //Evitar que la pagina se recargue cuando en un evento SUBMIT
    event.preventDefault();
  })

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList)

  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    );
  }

  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

  function addEventClick($element) {
    // agregando evento de click al item pelicula
    $element.addEventListener('click', () => {
      alert('click');
    })
  }
 
  function renderMovieList(list, $container) {
    // actionList.data.movies = list
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer)

  const $featuringContainer = document.getElementById('#featuring');

  const $home = document.getElementById('#home');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

})() */






/* 
// Clase #13 - Clases y estilos CSS con classList.add()
// para manejar elementos del DOM "classList.[add/remove/toggle]()"

(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
  })

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList)

  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    );
  }

  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

  function addEventClick($element) {
    // agregando evento de click al item pelicula
    $element.addEventListener('click', () => {
      //alert('click');
      showModal();
    })
  }
 
  function renderMovieList(list, $container) {
    // actionList.data.movies = list
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer)

  const $featuringContainer = document.getElementById('#featuring');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal)

})() */







/*
// Clase #14 - Creación de elementos y asignación de atributos
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  // Esta parte (inicio)
  const $featuringContainer = document.getElementById('featuring');

  function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }
  
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active');
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);

  })
// Esta parte (fin)
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList);

  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    );
  }

  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

  function addEventClick($element) {
    // agregando evento de click al item pelicula
    $element.addEventListener('click', () => {
      //alert('click');
      showModal();
    })
  }
 
  function renderMovieList(list, $container) {
    // actionList.data.movies = list
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer)


  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})() */





/*
// Clase #15 - Formularios (busqueda con Form en el API)
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
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

  //Funcion para crear template de la pelicula encontrada
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
  
  //Evento de busqueda submit, donde 
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
    const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`);
    const HTMLString = featuringTemplate(peli.data.movies[0]);
    $featuringContainer.innerHTML = HTMLString;
  })

  const actionList = await getData(`${BASE_API}list_movies.json?genre=action`);
  const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`);
  console.log(actionList, dramaList, animationList);

  function videoItemTemplate(movie) {
    return (
      `
      <div class="primaryPlaylistItem">
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
      showModal();
    })
  }
 
  function renderMovieList(list, $container) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer)


  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})() */







/*
// Clase #16 - Desestructuración de objetos
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
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
// Asignación por destructuración - destructure assignment javascript (inicio)
    const {
      data: {
        movies: pelis
      }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`);
    const HTMLString = featuringTemplate(pelis[0]);
    $featuringContainer.innerHTML = HTMLString;
  })
// Asignación por destructuración - destructure assignment javascript (fin)

  const actionList = await getData(`${BASE_API}list_movies.json?genre=action`);
  const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`);
  console.log(actionList, dramaList, animationList);

  function videoItemTemplate(movie) {
    return (
      `
      <div class="primaryPlaylistItem">
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
      showModal();
    })
  }
 
  function renderMovieList(list, $container) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer)


  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})() */





/* 
// Clase #17 - DataSet (enviar datos dentro de elementos HTML)
//
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
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
    const {
      data: {
        movies: pelis
      }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`);
    const HTMLString = featuringTemplate(pelis[0]);
    $featuringContainer.innerHTML = HTMLString;
  })

  const actionList = await getData(`${BASE_API}list_movies.json?genre=action`);
  const dramaList = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const animationList = await getData(`${BASE_API}list_movies.json?genre=animation`);
  console.log(actionList, dramaList, animationList);

// data-id="${movie.id}", es un DataSet para colocar datos dentro de un elemento HTML
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
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer, 'action')

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer, 'drama')

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer, 'animation')


  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const modalTitle = $modal.querySelector('h1');
  const modalImage = $modal.querySelector('img');
  const modalDescription = $modal.querySelector('p');

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    
  }

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})()
 */






/* 
 // Clase #18 - Encontrando elementos en la lista (usando desestructuracion)

 (async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
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
    const {
      data: {
        movies: pelis
      }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`);
    const HTMLString = featuringTemplate(pelis[0]);
    $featuringContainer.innerHTML = HTMLString;
  })

  const { data: {movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`);
  const { data: {movies: dramaList} } = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const { data: {movies: animationList} } = await getData(`${BASE_API}list_movies.json?genre=animation`);

// data-id="${movie.id}", es un DataSet para colocar datos dentro de un elemento HTML
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
      addEventClick(movieElement);
    })
  }

  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action')

  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama')

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation')


  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

  //Encontrando elementos en las listas actionList,dramaList,animationList (inicio)
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
  //(fin)

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})()
 */



/* 
// Clase #19 - Animaciones (a las imagenes con fadeIn)

 (async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
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
    const {
      data: {
        movies: pelis
      }
    } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`);
    const HTMLString = featuringTemplate(pelis[0]);
    $featuringContainer.innerHTML = HTMLString;
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
  
  //Se altero el orden de las request, cada categoria carga 
  //una vez terminada su request, ya no todas a la vez 
  //(inicio) 
  const { data: {movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`);
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action')
  
  const { data: {movies: dramaList} } = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama')
  
  const { data: {movies: animationList} } = await getData(`${BASE_API}list_movies.json?genre=animation`);
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation')
  //(fin)
  
  
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');
  
  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');
  
  //Encontrando elementos en las listas actionList,dramaList,animationList (inicio)
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
  //(fin)

  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);

})()
*/






/* 
// Clase #20 - Manejo de Errores
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //validar si data trae peliculas
    if (data.data.movie_count > 0) {
      // aquí se acaba
      return data;
    }
    // si no hay pelis aquí continua
    //crea un error y lo retorna para que la otra funcion muestre el error
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
  
  const { data: {movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`);
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action')
  
  const { data: {movies: dramaList} } = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama')
  
  const { data: {movies: animationList} } = await getData(`${BASE_API}list_movies.json?genre=animation`);
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation')
  
  
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

})() */



/* 
// Clase - Extra (Reto)

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

  // RETO de consumir API para Playlist de amigos y peliculas
  //(inicio)

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
//(fin)

  const { data: {movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`);
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const { data: {movies: dramaList} } = await getData(`${BASE_API}list_movies.json?genre=drama`);
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');
  
  const { data: {movies: animationList} } = await getData(`${BASE_API}list_movies.json?genre=animation`);
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
*/




/* 
// Clase #21 - LocalStorage

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

  const { data: {movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`);
  // Guardado datos a localStorage con window.localStorage.setItem()
  // Los objetos se parsean a texto plano con JSON.stringify()
  // localStorage solo guarda texto plano
  window.localStorage.setItem('actionList', JSON.stringify(actionList));
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const { data: {movies: dramaList} } = await getData(`${BASE_API}list_movies.json?genre=drama`);
  window.localStorage.setItem('dramaList', JSON.stringify(dramaList));
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');
  
  const { data: {movies: animationList} } = await getData(`${BASE_API}list_movies.json?genre=animation`);
  window.localStorage.setItem('animationList', JSON.stringify(animationList));
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
 */




/*
// Clase #22 - Obteniendo los datos almacenados

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

})() */

