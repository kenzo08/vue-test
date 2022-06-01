<template>
  <div :class="$style.container">
    <div v-for="post in posts" :key="post.id" :class="$style['post-box']">
      <router-link  style="text-decoration: none; color: inherit;" :to="{name:'CurrentPost', query:{postId:post.id}}">
        <div :class="$style.posts">
       <span :class="$style.title">
         {{ post.title }}
       </span>
          <span :class="$style['post-body']">
          {{post.body}}
        </span>
        </div>
      </router-link>
    </div>
  </div>
<!--  <router-link :to="{name: 'NewPostPage'}">-->
<!--    <BtnBase style="width: 200px" label="Click me" @click="lol"/>-->
<!--  </router-link>-->
</template>

<script setup lang="ts">
import BtnBase from "./atom/BtnBase.vue";

interface Props {
  posts: [];
}

defineProps<Props>()

</script>

<style module>
.container {
  padding: 20px;
}


.title{
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;
}

.post-body{
  font-size: 15px;
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
  margin-bottom: 16px;
}



</style>