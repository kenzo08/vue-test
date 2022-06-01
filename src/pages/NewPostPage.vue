<template>
<div :class="$style.container">
  <h1>Добавление нового поста</h1>
  <form
      action="/"
      v-on:submit.prevent="addNewPost(newPost.title, newPost.body)"
  >
    <input-base v-model="newPost.title"  placeholder="Заголовок поста"/>
    <input-base v-model="newPost.body"  placeholder="Тело поста"/>
    <BtnBase :label="'Добавить пост'"/>
  </form>
</div>
</template>

<script setup lang="ts">
import InputBase from "../components/atom/InputBase.vue";
import {ref} from "vue";
import BtnBase from "../components/atom/BtnBase.vue";


const newPost = ref({
  title:'',
  body:''
})

const addNewPost = async (title: string, body:string)=>{
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
      .then(function (response) {
        if(response.ok){
          alert('Пост добавлен')
          newPost.value.title=''
          newPost.value.body=''
        };
        return console.log(response.json());
      })}

</script>

<style module>
.container{
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
}

form{
  display: flex;
  flex-flow: column;
  gap: 12px;
  width: 500px;
}
</style>