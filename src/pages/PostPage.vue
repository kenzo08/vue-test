<template>
  <div :class="$style.container">
    <router-link style="text-decoration: none; color: inherit; " :to="{name:'NewPostPage'}">Добавить новый пост
    </router-link>
    <SelectBase
        v-model="selectedSort"
        :options="sortOptions"
    />
    <InputBase v-model="userId" placeholder="Введите id автора для поиска"/>
    <h1>Посты</h1>
    <PostList  :posts="exactUser.length===0 ? sortedAndSearchedPosts : exactUser"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import PostList from "../components/PostList.vue"
import useSortedPosts from "../helpers/useSorted";
import useSortedAndSearchedPosts from "../helpers/useSortedAndSearchedPosts";
import SelectBase from "../components/atom/SelectBase.vue";
import InputBase from "../components/atom/InputBase.vue";

const info = ref([])
const exactUser = ref([])
const sortOptions=  [
  {value: 'title', name: 'По названию'},
  {value: 'body', name: 'По содержимому'},
]

const userId = ref('')
const {sortedPosts, selectedSort} = useSortedPosts(info);
const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)


const filterUserRequest =  async (id:string)=>{
  await axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => (exactUser.value = response.data));
}

const getAllPosts = async ()=>{
  await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (info.value = response.data));
}



watch(()=> userId.value, (newId, oldId )=>{
if(newId!==oldId){
  filterUserRequest(newId)
}
})

onMounted(async () => {
  getAllPosts()
})
</script>

<style module>
h1 {
  text-align: center;
}

.container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 16px;
}

</style>