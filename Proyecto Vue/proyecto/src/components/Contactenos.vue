<template>
  <v-container>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="50"
      label="Nombre Completo"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-textarea
          name="input-7-1"
          label="Mensaje"
          hint="Escriba su PQR"
    ></v-textarea>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
  </v-container>
</template>


<script>
    
</script>

<style>
</style>