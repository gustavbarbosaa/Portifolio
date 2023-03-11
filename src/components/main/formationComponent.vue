<template>
  <div id="container-form">
    <h2>Formação e Experiência Profissional</h2>
    <div class="formacao">
      <picture>
        <img src="../../assets/chapeu-de-graduacao.png" alt="">
      </picture>
      <section class="section-form">
        <div class="texts-form">
          <a href="https://fescfafic.edu.br/" target="_blank" class="link-experiences">
            <div class="text-h3">
              <h3>Cursando Ciências da Computação - Faculdade Católica da Paraíba</h3>
              <img src="../../assets/catolica.png" alt="">
            </div>
          </a>
          <a href="https://www.netlinetelecom.com.br/" target="_blank" class="link-experiences">
            <div class="text-h3">
              <h3>Atuando como Analista de TI Jr. - Netline Telecom</h3>
              <img src="../../assets/netline.png" alt="">
            </div>
          </a>
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

  .section-form {
    height: 100%;
  }

  .texts-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .formacao {
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

  .formacao a {
    text-decoration: none;
    color: #444343;
  }

  .formacao h3 {
    position: relative;
    padding: 2rem;
    margin: 3rem;
    font-weight: bold;
  }

  .formacao img {
    height: 350px;
  }

  .text-h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid #acaaaa;
    border-radius: 50px 10px;
    transition: .2s ease-in-out;
  }

  .text-h3 h3 {
    margin-top: 0;
    margin-bottom: 10px;
    padding: 0;
  }

  .text-h3 img {
    height: 50px;
    width: 120px;
  }

  .text-h3:hover {
    color: #e2e2e2;
    transform: scale(1.05);
    background-color: #44434367;
  }

</style>
