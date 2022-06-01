<template>
<button>
  {{label}}
</button>
</template>

<script setup lang="ts">

interface Props{
  label: string
}

defineProps <Props>()

</script>

<style module>
button{
  padding: 15px 20px;
  border-radius: 10px;
  width: 100%;
  border: none;
  background: aquamarine;
  font-size: 15px;
  cursor: pointer;
}
 button:hover{
  background: chartreuse;

}
</style>