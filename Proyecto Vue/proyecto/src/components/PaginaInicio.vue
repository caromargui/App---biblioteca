<template>
  <div>
    <Header />
    <div>
      <h1>Servicios</h1>
      <!-- inicio sección de servicios -->
      <div id="servicios" class="services-section">
        <article class="services-info">
          <img class="services-info__imagen" src="./loan.png" alt="" />
          <h2 class="services-info__title">Simulador</h2>
          <p class="services-info__text">
            En esta sección podrás simular las cuotas de tu prestamo bancario y
            evaluar su solicitud
          </p>
        </article>
        <article class="services-info">
          <img class="services-info__imagen" src="./logocurso.png" alt="" />
          <h2 class="services-info__title">Cursos</h2>
          <p class="services-info__text">
            En esta sección podrás encontrar todo los cursos disponibles y los
            cursos ya finalizados.
          </p>
        </article>
        <article class="services-info">
          <img class="services-info__imagen" src="./logolibros.png" alt="" />
          <h2 class="services-info__title">Préstamos</h2>
          <p class="services-info__text">
            En esta sección podrás acceder a los servicios relacionados con los
            libros disponibles.
          </p>
        </article>
      </div>
      <!-- fin sección de servicios -->

      <h1>Noticias</h1>
      <!-- inicio sección de noticias -->
      <div id="news" class="news-section">
        <article class="news-info">
          <div class="news-header">
            <img
              class="news-info__image"
              src="http://placeimg.com/400/200/animals"
              alt=""
            />
            <h2 class="news-info__title">Noticia 1</h2>
          </div>
          <p class="news-info__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quas voluptate magni repellat eligendi! Inventore voluptas
            voluptates quia voluptatum expedita, ducimus delectus dolore eaque
            maiores iusto modi eum aut corporis?...<a
              href="http://127.0.0.1:5500/src/index.html"
            >
              Ver más</a
            >
          </p>
        </article>

        <article class="news-info">
          <div class="news-header">
            <img
              class="news-info__image"
              src="http://placeimg.com/400/200/tech"
              alt=""
            />
            <h2 class="news-info__title">Noticia 2</h2>
          </div>
          <p class="news-info__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quas voluptate magni repellat eligendi! Inventore voluptas
            voluptates quia voluptatum expedita, ducimus delectus dolore eaque
            maiores iusto modi eum aut corporis?...<a
              href="http://127.0.0.1:5500/src/index.html"
            >
              Ver más</a
            >
          </p>
        </article>

        <article class="news-info">
          <div class="news-header">
            <img
              class="news-info__image"
              src="http://placeimg.com/400/200/arch"
              alt=""
            />
            <h2 class="news-info__title">Noticia 3</h2>
          </div>
          <p class="news-info__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quas voluptate magni repellat eligendi! Inventore voluptas
            voluptates quia voluptatum expedita, ducimus delectus dolore eaque
            maiores iusto modi eum aut corporis?...<a
              href="http://127.0.0.1:5500/src/index.html"
            >
              Ver más</a
            >
          </p>
        </article>

        <article class="news-info">
          <div class="news-header">
            <img
              class="news-info__image"
              src="http://placeimg.com/400/200/people"
              alt=""
            />
            <h2 class="news-info__title">Noticia 4</h2>
          </div>
          <p class="news-info__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quas voluptate magni repellat eligendi! Inventore voluptas
            voluptates quia voluptatum expedita, ducimus delectus dolore eaque
            maiores iusto modi eum aut corporis?...
            <a href="http://127.0.0.1:5500/src/index.html"> Ver más</a>
          </p>
        </article>
      </div>
      <!-- fin sección de noticias -->
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "PaginaInicio",
  components: { Header },
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  max-width: 1400px;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 0;
  color: #222222;
}

p {
  text-transform: none;
}

.header-section {
  margin-bottom: 100px;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.site-title {
  width: 30%;
}

.site-nav {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.site-nav > a {
  color: inherit;
  text-decoration: none;
}

.site-nav > a:hover {
  text-decoration: underline;
  font-weight: bold;
}

.logo-container {
  width: 30%;
}

.logo-container__site-logo {
  height: 80px;
}

.banner {
  width: 100%;
}

.banner > img {
  width: 100%;
  height: 400px;
  max-width: 1400px;
  object-fit: cover;
}

/* inicio slider con imágenes*/
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul.slider {
  position: relative;
  width: 100%;
  height: 400px;
  max-width: 1400px;
  object-fit: cover;
}

ul.slider li {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  width: inherit;
  height: inherit;
  transition: opacity 0.5s;
  background: #fff;
}

ul.slider li img {
  width: 100%;
  height: 400px;
  max-width: 1400px;
  object-fit: cover;
}

ul.slider li:first-child {
  opacity: 1;
  /*se muestra el primer <li>*/
}

ul.slider li:target {
  opacity: 1;
  /*se muestra el <li> del enlace que pulsemos*/
}

.menu {
  text-align: center;
  margin: 20px;
}

.menu li {
  display: inline-block;
  text-align: center;
}

.menu li a {
  display: inline-block;
  color: #222222;
  text-decoration: none;
  background-color: #089dc2;
  width: 20px;
  height: 20px;
  font-size: 15px;
  border-radius: 200%;
}

/* fin slider con imágenes*/

.services-section,
.seccion-equipo {
  display: flex;
  margin-bottom: 100px;
}

.header-container {
  background-color: #089dc2;
}
/* Estilos de la sección de Noticias */
.news-section {
  flex-wrap: wrap;
  display: flex;
}

.news-info {
  width: 50%;
  padding: 10px;
}

.news-info__image {
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
}

.news-info__text {
  justify-content: center;
}

.news-header {
  display: block;
  justify-content: space-around;
}

.news-info__title {
  align-self: center;
}
/* Fin de Estilos en la sección de noticias */
.services-info {
  padding: 20px;
  text-align: center;
}

.seccion-pie {
  background-color: #25294f;
  height: 200px;
  display: flex;
  color: white;
  justify-content: space-evenly;
}

.services-info__imagen {
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
}

.team-info {
  width: 25%;
  padding: 15px;
}

.team-info__imagen {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>