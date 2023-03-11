<template>
  <div id="repositories-container">
    <h2>Meus repositórios</h2>
    <div class="section-container">
      <!-- Criar cards dinâmicos com api do github -->
      <div class="cards-repositories">
        <div class="text-repos">
          <h3>Titulo do repositorio</h3>
          <p>descricao</p>
        </div>
        <picture>
          <img src="../../assets/link-conectado.png" alt="">
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'repositoriesComponent',
  components: {

  },
};
</script>

<style>
  #repositories-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    text-align: center;
    font-weight: 300;
    font-style: italic;
    font-family: Roboto, sans-serif;
  }

  .section-container {
    height: 75%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 20px 40px;
    background-color: rgb(44, 39, 46);
  }

  .cards-repositories {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    border-radius: 10px 20px;
    background-color: rgba(149, 145, 151, 0.288);
  }

  .cards-repositories h3, p {
    margin: 0;
    font-weight: 700;
    font-size: 16px;
  }
</style>
