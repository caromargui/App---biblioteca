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
       <input type="number" v-model="cuotas"/>
       <br/>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          outlined
          shaped
        ></v-card>
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
    <br/>
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
      this.valorcuota=((parseFloat (this.valorprestamo))*(0,796575374*((1+0,796575374)^(parseFloat (this.cuotas)))))/(((1+0,796575374)^(parseFloat(this.cuotas)))-1);
    },

  },
} 
</script>

<style>

</style>