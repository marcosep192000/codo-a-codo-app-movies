
const contenedor = document.getElementById("contenedor");
const btnAnterior = document.getElementById("btnAnt");
const btnSiguiente = document.getElementById("btnSig");
const contenedor_cinco = document.getElementById("aclamadas_cinco");

const aclamadas = async()=> {
  try {
    const respuestaCinco = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=5`
    );
    console.log("cinco estas son : " + respuestaCinco); 
    if (respuestaCinco.status == 200) {
      const datosCinco = await respuestaCinco.json();
      console.log(datosCinco);
      let pelis = [];

      datosCinco.results.slice(0,5).forEach((pelicula) => {

        pelis += `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title titulos">${pelicula.title} </h5>
                </div>
            </div>
            `;
        
      });
      contenedor_cinco.innerHTML = pelis;
    }
  }
  catch {
    console.log(error.message);
  }
}



let pagina = 1;

btnAnt.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});

btnSig.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
  }
});

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`
    );
    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);

      let peliculas = [];

      datos.results.forEach((pelicula) => {
        peliculas += `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title titulos">${pelicula.title} </h5>
                </div>
            </div>
            `;
      });

      contenedor.innerHTML = peliculas;
    }
  } catch (error) {
    console.log(error.message);
  }
};

cargarPeliculas();
aclamadas(); 