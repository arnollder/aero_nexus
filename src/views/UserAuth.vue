<template>
  <div class="form-group">
    <h2 class="auth-title">Регистрация</h2>
    <form class="form-auth" @submit.prevent="handleSubmit">
      <label for="login">Логин:</label>
      <input type="login" id="login" v-model="formData.login" placeholder="Ваш логин" />
      <label for="password">Пароль: </label>
      <input type="password" id="password" v-model="formData.password" placeholder="Ваш пароль" />

      <button class="send-btn">Отправить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const authStore = useAuthStore();
const { isAuth } = storeToRefs(authStore);

const formData = reactive({
  login: '',
  password: '',
});

const handleSubmit = () => {
  if (!formData.login || !formData.password) {
    alert('Не все поля заполнены!');
    return;
  }

  authStore.submitAuth(formData);
  formData.login = '';
  formData.password = '';
};
</script>

<style scoped>
.auth-title {
  text-align: center;
}
.form-group {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.form-auth {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid black;
  border-radius: 15px;
  background-color: wheat;
}
.send-btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: rgb(44, 172, 44);
  color: black;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
