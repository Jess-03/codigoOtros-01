/* 
  Este código es para hacer una solicitud API fetch de datos que contiene la url. En este caso se solicitan tres datos: name, blog y location. 

  Con async y await se espera a que se cumpla una promesa, de lo contrario la otra funcion manda un mensaje de error.
*/


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Cambio del nombre de las variables, por que no son descriptivas
// n ---> name
// b ---> blog
// l --> location

//Para hacer referencia a las clases se añade un punto (.) al inicio de la palabra
// las clases name y blog fueron modificadas
const name = document.querySelector('.name');
const blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

//Se añadió "async" antes de la función
async function displayUser(username) {
  name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  
  console.log(data);
  name.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  $location.textContent = '${data.location}';
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);