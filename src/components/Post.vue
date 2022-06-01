<template>
  <div :class="$style.container">
    <div :class="$style.posts">
    <span :class="$style.title">
         {{ post.title }}
    </span>
      <span :class="$style['post-body']">
      {{ post.body }}
    </span>
      <div :class="$style['user-block']">
        <span>Автор поста: {{user.name}}</span>
        <span>Электронная почта автора: {{user.email}}</span>
      </div>
    </div>
    Отзывы к посту:
    <div v-for="comment in postComments" :key="comment.id">
      <div :class="$style['comment-box']">
        <span> Автор: {{comment.name}}</span>
        <span>{{comment.body}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


const post = ref([])
const route = useRoute()
const postId = route.query.postId
const user = ref([])
const postComments = ref([])

onMounted(async () => {
  await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => (post.value = response.data));
  await axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
      .then(response => (postComments.value = response.data));
  await axios
      .get(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`)
      .then(response => (user.value = response.data));

  console.log(postComments.value)
})
</script>

<style module>

.container{
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 20px;

}

.title {
  font-size: 40px;
  font-weight: 500;
  line-height: 100%;
}

.post-body {
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
}

.posts {
  display: flex;
  gap: 20px;
  flex-flow: column;
  padding: 20px;
  border: 1px solid deepskyblue;
  border-radius: 10px;
}

.user-block{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  color: blue;
}

.comment-box{
  display: flex;
  flex-flow: column;
  width: 50%;
  border-radius: 5px;
  border: 1px solid;
  padding: 20px;
  gap: 12px;
}

</style>