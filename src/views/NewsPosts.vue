<template>
  <div class="posts_conteiner">
    <div class="buttons">
      <button class="btn" @click="router.push({ name: 'home' })">НА ГЛАВНУЮ</button>
      <button class="btn" @click="router.back()">НАЗАД</button>
      <button class="btn" @click="router.forward()">ВПЕРЕД</button>
    </div>
    <div>Posts</div>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-else-if="isError">Ошибка при получении списка постов!</h2>
    <ul v-else>
      <li @click="redirectToPost(post.id)" class="post_title" :key="post.id" v-for="post in posts">
        {{ `${post.id}. ${post.title}` }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { $api } from '@/api';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IPost } from '../components/MainContent/types';

const router = useRouter();
const route = useRoute();

const posts = ref<IPost[]>([]);
const isLoading = ref(false);
const isError = ref(false);

const fetchPosts = async () => {
  isLoading.value = true;
  isError.value = false;
  posts.value = [];
  try {
    const { data } = await $api.get<IPost[]>('/posts');
    posts.value = data;
  } catch (err: unknown) {
    console.error(err as AxiosError);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
fetchPosts();

const redirectToPost = (id: number) => {
  router.push(`/news/${id}`);
};

console.log('route', route);
</script>

<style scoped>
.buttons {
  padding: 10px 20px;
  display: flex;
  column-gap: 10px;
}
.btn {
  padding: 5px 10px;
  background-color: rgb(44, 172, 44);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.post_title {
  cursor: pointer;
}
</style>
