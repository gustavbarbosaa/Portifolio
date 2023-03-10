<template>
  <div id="container-form">
    <h2>Formação e Experiência Profissional</h2>
    <div class="formacao">
      <picture>
        <img src="../../assets/chapeu-de-graduacao.png" alt="">
      </picture>
      <section>
        <div class="texts-form">
          <div class="text-h3">
            <h3>Cursando Ciências da Computação - Faculdade Católica da Paraíba</h3>
          </div>
          <div class="text-h3">
            <h3>Atuando como Analista de TI Jr. - Netline Telecom</h3>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'formationComponent',
};
</script>

<style>
  #container-form{
    height: 100vh;
    padding: 3rem;
    text-align: center;
    background-color: #7e7e7e;
    font-weight: 300;
    font-style: italic;
    font-family: Roboto, sans-serif;
  }

  #container-form h2 {
    color: #DDDDDD;
  }

  .formacao {
    z-index: 0;
    position: relative;
    height: 70%;
    max-width: 1253px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #DDDDDD;
    border-radius: 10px 50px;
    -webkit-box-shadow: 0px 7px 22px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 7px 22px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 7px 22px 3px rgba(0,0,0,0.75);
  }

  .formacao h3 {
    position: relative;
    padding: 2rem;
    margin: 3rem;
    font-weight: bold;
    border: 1px solid #acaaaa;
    border-radius: 50px 10px;
  }

  .formacao img {
    height: 350px;
  }

</style>
