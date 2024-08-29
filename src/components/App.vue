<template>
    <div id="app">
      <header>
        <nav>
          <router-link to="/">Главная</router-link>
          <router-link to="/register">Регистрация</router-link>
          <router-link to="/login">Логин</router-link>
        </nav>
      </header>
      
      <main>
        <router-view></router-view>
      </main>
      
      <footer>
        <p>© 2024 My Vue App</p>
      </footer>
    </div>
</template>
  
<script>
  export default {
    name: 'App'
  };
</script>
  
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  header {
    background-color: #42b983;
    padding: 10px;
    color: white;
  }
  
  nav {
    display: flex;
    justify-content: center;
  }
  
  nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  
  nav a.router-link-exact-active {
    font-weight: bold;
  }
  
  main {
    padding: 20px;
  }
  
  footer {
    margin-top: 20px;
    background-color: #35495e;
    padding: 10px;
    color: white;
  }
</style>