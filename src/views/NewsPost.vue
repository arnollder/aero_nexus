<template>
  <div class="posts_container">
    <button class="btn" @click="router.push({ name: 'news' })">К списку постов</button>
    <div>Post: {{ route.params.id }}</div>
    <div class="">{{ post.title }}</div>
    <div class="">{{ post.body }}</div>
  </div>
</template>

<script setup lang="ts">
import { $api } from '@/api';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IPost } from '../types/types';

const router = useRouter();
const route = useRoute();

const post = ref<IPost>({} as IPost);
const isLoading = ref(false);
const isError = ref(false);

const fetchPost = async () => {
  isLoading.value = true;
  isError.value = false;
  post.value = {} as IPost;
  try {
    const { data } = await $api.get<IPost>(`/posts/${route.params.id}`);
    post.value = data;
  } catch (err: unknown) {
    console.error(err as AxiosError);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
fetchPost();

console.log(post.value);
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
</style>
