<template>
  <v-container>
    <v-row >
      <v-col class="text-center">
        <h1>Simulador de crédito</h1>
    </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-text-field
          type="number"
          label="Valor del préstamo"
          :rules="rules1"
          hide-details="auto"
          v-model="valorprestamos"
        ></v-text-field>
        <v-text-field
          type="number"
          label="Cantidad de cuotas"
          :rules="rules2"
          hide-details="auto"
          v-model="cuotas"
        ></v-text-field>
      </v-col>
      <v-col>
       <v-card
          class="mx-auto"
          max-width="400"
       >
       <v-img
         src="https://como-funciona.com/wp-content/uploads/2020/11/creditos-de-nomina-800x400.jpg"
         height="200px"
       ></v-img>   
       </v-card>  
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
      <v-btn
          color="primary"
          elevation="2"
          rounded
          medium
          @click="cuotafija"
      >Simular </v-btn>
      </v-col>
    </v-row>
    {{valorcuota}}
  </v-container>
</template>

<script>
export default {
    name: "SimuladorCredito",
    data: () => {
      return {
        valorprestamo:null,
        cuotas:null,
        valorcuota:"",
        rules1:[
          value => !!value||'Valor obligatorio',
          value => (value && value >= 1000000)||'Valor obligatorio mayor a $1.000.000'
        ],
        rules2:[
          value => !!value||'Cantidad de cuotas es un valor obligatorio',
          value => (value && value >= 12 && value <=120)||'La cantidas de cuotas debe ser mayor mayor a 12 y menor a 120'
        ]
      };
  },
  methods: { 
      cuotafija(){
      this.valorcuota=((parseFloat (this.valorprestamos))/(parseFloat (this.cuotas)));
      //<!---this.valorcuota=((parseFloat (this.valorprestamos))*(0,796575374*((1+0,796575374)^(parseFloat (this.cuotas)))))/(((1+0,796575374)^(parseFloat(this.cuotas)))-1);
    },

  },
} 
</script>

<style>

</style>