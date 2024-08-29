<template>
  <div class="col-12">
    <div class="row">
      <div class="col-8 mx-auto my-auto">
        <div class="card">
          <div class="card-header text-center">
            <h2>Вход в аккаунт</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Электронная почта:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль:</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" class="btn btn-primary">Войти</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
    email: '',
    password: ''
})

const router = useRouter()

const login = async () => {
    try {
        const response = await axios.post('http://localhost:8080/login', form.value);
        localStorage.setItem('token', response.data.token);
        router.push('/');
    } catch (error) {
        console.error('Login failed', error);
    }
}
</script>