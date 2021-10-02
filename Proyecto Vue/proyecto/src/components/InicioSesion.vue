<template>
  <div>
    <Header />
    
    <div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div>
              <div>
                <form id="loginForm" method="POST" novalidate="novalidate">
                  <div>
                    <label for="correo">*Correo electrónico</label>
                    <input
                      type="text"
                      class="form-control"
                      id="correo"
                      name="correo"
                      title="Por favor ingrese su dirección de correo electrónico"
                      placeholder="ejemplo@gmail.com"
                    />
                  </div>
                  <br />
                  <div>
                    <label for="contraseña">*Contraseña</label>
                    <input
                      type="password"
                      class="form-control"
                      id="contraseña"
                      name="contraseña"
                      title="Por favor ingrese su contraseña"
                    />
                  </div>
                  <br />
                  <div class="row mx-auto col-5">
                    <button class="btn btn-success btn-block">
                      INICIAR SESIÓN
                    </button>
                  </div>
                  <div class="row mx-auto col-5">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Bottom popover"
                    >
                      ¡Quiero registrame!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from "./Header.vue";

export default {
  components: { Header, Footer },
};


</script>

<style>
</style>