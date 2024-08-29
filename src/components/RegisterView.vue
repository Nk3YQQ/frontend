<template>
    <div class="col-12">
    <div class="row">
      <div class="col-8 mx-auto my-auto">
        <div class="card">
          <div class="card-header text-center">
            <h2>Регистрация</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="firstName" class="form-label">Имя:</label>
                <input class="form-control" v-model="form.first_name" id="firstName" type="text" required />
                <div v-if="errors.first_name" class="text-danger">{{ errors.first_name }}</div>
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Фамилия:</label>
                <input class="form-control" v-model="form.last_Name" id="lastName" type="text" required />
                <div v-if="errors.last_name" class="text-danger">{{ errors.last_name }}</div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Электронная почта:</label>
                <input class="form-control" v-model="form.email" id="email" type="email" required />
                <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Пароль:</label>
                <input class="form-control" v-model="form.password" id="password" type="password" required />
                <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
              </div>
              <div class="mb-3">
                <label for="passwordConfirm" class="form-label">Подтверждение пароля:</label>
                <input class="form-control" v-model="form.password_confirm" id="passwordConfirm" type="password" required />
                <div v-if="errors.password_confirm" class="text-danger">{{ errors.password_confirm }}</div>
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
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: ''
});

const errors = ref({});

const router = useRouter();

const register = async () => {
    try {
        await axios.post('http://localhost:8080/register', form.value);
        router.push('/login');
    } catch (error) {
        if (error.response && error.response.data) {
          let details = error.response.data.details;
          
          errors.value = {
            first_name: details.first_name || '',
            last_name: details.last_name || '',
            email: details.email || '',
            password: details.password || '',
            passwordConfirm: details.password_confirm || '',
          };
        } else {
          console.error('Registration failed', error);
        }
    }
};
</script>