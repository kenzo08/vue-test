<template>
  <input type="text"
         :value="modelValue"
         @input="updateValue"
         :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
interface Props{
  type?: string;
  modelValue?:string;
  placeholder?: string;
  label?: string;
}

defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style module>

input{
  padding: 15px 20px;
  border: 1px solid;
  border-radius: 10px;
  background: white;
  font-size: 15px;
}


</style>