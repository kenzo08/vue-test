<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Props{
  modelValue: string;
  options: [];
}

defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const changeOption = (event) =>{
  emit('update:modelValue', event.target.value)
};
</script>

<style module>

select{
  padding: 10px 15px;
  border-radius: 10px;
  border: solid 1px;
  font-size: 15px;
}
</style>