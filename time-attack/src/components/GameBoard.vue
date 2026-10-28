<script  setup>
import { ref } from 'vue';
import KeyPad from './KeyPad.vue';
const tecles = ['A', 'S', 'D', 'F']

const tempsObjectiu = {
  A: 2,
  S: 4,
  D: 5,
  F: 7
}

const jugant = ref(false)
const resultats = ref([])

let tempsInici = 0

function iniciarPartida(){
    resultats.value = [];
    jugant.value = true;
   tempsInici= performance.now();
}
function rebreTecla(tecla){
    
}


</script>
<template>
   <KeyPad
  :tecles="tecles"
  :bloquejat="!jugant"
  @premuda="rebreTecla"
/>
</template>
<style></style>
