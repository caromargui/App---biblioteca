<template>
  <div >
    <div class="header-container">
      <div class="logo-container">
        <!-- <a> enlaza la imagen con la página de inicio -->
        <a href="">
          <img
            class="logo-container__site-logo"
            src="./logobiblioteca.png"
            alt="Logo Bibilioteca Comunitaria"
          />
        </a>
      </div>

      <div class="site-title">
        <h1>Biblioteca Comunitaria</h1>
      </div>

      <ul class="site-nav">
        <a href="#">Inicio</a>
        <a href="#simulator">Simulador</a>
        <a href="#courses">Curso</a>
        <a href="#lendings">Préstamos</a>
        <a href="#login">Iniciar sesión</a>
      </ul>
      <!-- Fin menú navegación -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body{
  padding: 0;
  margin: 0;
}

.header-section {
  margin-bottom: 0px;
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

</style>