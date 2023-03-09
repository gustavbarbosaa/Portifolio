<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="experiences">
    <div class="content-experiences">
      <h1>Experiências<span class="barra">/</span><span>Certificações</span></h1>
      <div class="container-cardsExperiences">
        <cardExperience title="Desenvolvendo Futuro" description="Projeto de extensão ofertado pela faculdade, onde foi replicado uma versão mobile do sistema da instituição e tive a oportunidade de desenvolver o desing da aplicação através do figma."/>
        <cardExperience title="Projeto e-GA Católica" description="Projeto de pesquisa ofertado pela faculdade, onde iremos desenvolver um novo sistema para a faculdade utilizando tecnologias atuais, como TypeScript, Vue.Js, Python, Django"/>
        <cardExperience title="Curso de Desenvolvimento Full-Stack" description="Curso com duração de 4 meses, voltado para o desenvolvimento de uma aplicação web completa, desde o banco de dados ao Front-end."/>
        <cardExperience title="Curso de HTML e CSS" description="Cursos básicos do Gustavo Guanabara/Curso em video, onde realizei o módulo 1 e 2 do curso."/>
        <cardExperience title="Curso básico de JavaScript" description="Curso introdutório do Gustavo Guanabara/Curso em video, onde desenvolvi um pouco de lógica de programação e um conhecimento com manipulação de DOM."/>
        <cardExperience title="Discover RocketSeat" description="Série de aulas sobre desenvolvimento web, abordando desde de NojeJs, React, Java Script puro, HTML e CSS!"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import cardExperience from './cardExperience.vue';

export default {
  components: { cardExperience },
  name: 'experiencesComponent',
};
</script>

<style>

  #experiences {
    height: 100vh;
    color: rgb(221, 221, 221);
    background-color: rgb(44, 39, 46);
  }

  .content-experiences {
    padding: 1rem;
    text-align: center;
    font-weight: 300;
    font-style: italic;
    font-family: Roboto, sans-serif;
  }

  .content-experiences span {
    color: #7e7e7e;
  }

  .barra {
    color: #74917D;
  }

  .container-cardsExperiences {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
</style>
