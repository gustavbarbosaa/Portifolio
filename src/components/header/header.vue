<!-- eslint-disable no-trailing-spaces -->
<!-- eslint-disable max-len -->
<template>
  <header>
    <div class="title-header">
      <img src="../../assets/homem.png" alt="">
      <h2>{{nome}}</h2>
    </div>
    <nav class="nav-header">
      <ul>
        <li>
          <a href="#about-me">Sobre mim</a>
        </li> 
        <li>
          <a href="#container-form">Formação</a>
        </li> 
        <li>
          <a href="#experiences">Experiências</a>
        </li> 
        <li>
          <a href="#repositories-container">Repositórios</a>
        </li> 
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'headerComponent',
  data() {
    return {
      nome: 'GUSTAVO',
    };
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100&display=swap');

html {
  scroll-behavior: smooth;
  animation: all ease-out ;
}

body {
  margin: 0;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(221, 221, 221);
}

header {
  position: fixed;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 300;
  font-size: 14px;
  font-style: italic;
  font-family: Roboto, sans-serif;
  z-index: 1;
  opacity: 0;
  background-color: rgb(221, 221, 221);
  transition: all .2s ease-in-out;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.329);
}

header:hover {
  opacity: 100;
}

.title-header {
  display: flex;
  align-items: center;
  gap: 5px;
}

ul li a {
  color: black;
}

.nav-header ul li a:hover, .title-header img:hover {
  transform: scale(1.1);
  transition-duration: .4s;
}

</style>
