<template>
    <div class="container">
        <div class="col-12">
            <div class="row">
                <h2 class="mb-5">{{ greetings }}</h2>
                <p><b>Всего машин</b>: {{ totalCarCount }}</p>
                <p><b>Всего пользователей</b>: {{ totalUserCount }}</p>

                <h3 class="mt-5 mb-4">Рекомендованные автомобили:</h3>
                <div v-for="car in recommendedCars" :key="car.id" class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="card-title"><b>{{ car.brand }} {{ car.type }}</b></h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Цена: {{ car.amount }} руб.</p>
                            <p class="card-text">Тип топлива: {{ car.fuel_type }}</p>
                            <p class="card-text">Коробка передач: {{ car.transmission }}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Посмотреть</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const greetings = ref('');
const totalCarCount = ref(0);
const totalUserCount = ref(0);
const recommendedCars = ref([]);

const fetchData = async() => {
    try {
        const response = await axios.get('http://localhost:8080/home');
        const data = response.data;

        greetings.value = data.greetings;
        totalCarCount.value = data.car_count;
        totalUserCount.value = data.user_count;
        recommendedCars.value = data.recomended_cars;
    } catch (error) {
        console.error('Error fetching home page data', error);
    }
};

onMounted (() => {
    fetchData();
});
</script>