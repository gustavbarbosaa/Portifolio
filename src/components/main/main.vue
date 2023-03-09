<!-- eslint-disable no-trailing-spaces -->
<!-- eslint-disable max-len -->
<template>
 <main id="about-me">
  <section>
    <div class="titles">
      <h2>Olá, bem vindo ao meu portifólio!</h2>
      <h3>Eu sou {{nome}}!</h3>
    </div>
    <div class="texts">
      <p>Sou um jovem de 20 anos e apaixonado por tecnologia.</p>
      <p>
        Atualmente estou cursando Ciências da Computação na Faculdade Católica da Paraíba, com o intuito de me aperfeiçoar e adquiri novos conhecimentos.
        Busco me tornar um desenvolvedor Front-end e futuramente ao longo da experiência adquirida, me tornar um desenvolvedor Full Stack.
      </p>
    </div>
    <div class="redes">
      <h2>Minhas redes sociais</h2>
      <nav>
       <ul>
         <li>
           <img src="../../assets/linkedin.png" alt="">
            <a href="">Linkedin</a>
          </li> 
         <li>
            <img src="../../assets/github.png" alt="">
            <a href="">Github</a>
          </li> 
          <li>
            <img src="../../assets/instagram.png" alt="">
            <a href="">Instagram</a>
          </li> 
        </ul>
      </nav>
    </div>
  </section>
  <section class="card">
    <picture class="foto-perfil">
      <img src="../../assets/perfil.png" alt="Imagem de Gustavo Barbosa, foto sorrindo, vestindo camisa branca">
    </picture>
  </section>
 </main>
</template>

<script lang="ts">
export default {
  name: 'mainComponent',
  data() {
    return {
      nome: 'Gustavo Barbosa',
    };
  },
};
</script>

<style>
  main {
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: Roboto, sans-serif;
  }

  .titles {
    margin-bottom: 1rem;
  }

  .titles h2 {
    font-size: 32px;
  }

  .titles h3 {
    font-size: 24px;
  }

  .titles h2, h3{
    margin: 0;
    font-weight: 300;
    font-family: Roboto, sans-serif;
  }

  .texts {
    width: 600px;
  }

  .texts p {
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    font-style: italic;
  }

  nav {
    display: flex;
    font-weight: 300;
    font-size: 14px;
    font-style: italic;
    font-family: Roboto, sans-serif;
  }

  ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      font-weight: bold;
      padding: 0;
  }

  ul img {
      width: 25px;
  }

  ul li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      list-style: none;
  }

  ul li:hover {
    transform: scale(1.1);
    transition-duration: .4s;
    cursor: pointer;
}

  ul li a {
      text-decoration: none;
  }

  .redes {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .redes h2 {
    font-weight: bold;
    font-size: 26px;
    font-style: italic;
    font-family: Roboto, sans-serif;
    margin-bottom: 0;
  }
</style>
