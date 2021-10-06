<template>
  <div>
    <h1>Simulador de credito</h1>
    <br/>
    <input type="number" v-model="valorprestamos"/>
    <br/>
    <input type="number" v-model="cuotas"/>
    <br/>
    <button @click="cuotafija()">Simular</button>
    <br />
    {{valorcuota}}
  </div>

</template>

<script>
export default {
    name: "SimuladorCredito",
    data: () => {
      return {
        valorprestamo:null,
        cuotas:null,
        valorcuota:"",
      };
  },
  methods: {
    cuotafija(){
      this.valorcuota=((parseFloat (this.valorprestamo))*(0,796575374*((1+0,796575374)^(parseFloat (this.cuotas)))))/(((1+0,796575374)^(parseFloat(this.cuotas)))-1);

    },

  },
} 
</script>

<style>

</style>