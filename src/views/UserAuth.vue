<template>
  <div class="form-group">
    <h2 class="auth-title">Регистрация</h2>
    <form class="form-auth" action="">
      <label for="login">Логин:</label>
      <input type="text" id="login" placeholder="Ваш логин" />
      <label for="password">Пароль: </label>
      <input type="text" id="password" placeholder="Ваш пароль" />
    </form>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
