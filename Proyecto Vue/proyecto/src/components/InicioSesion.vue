<template>
  <div>
    <Header />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <div id="login-overlay" class="modal-dialog ">
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
                  <button type="submit" class="btn btn-success btn-block">
                    INICIAR SESIÓN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: { Header },
};
</script>

<style>
</style>