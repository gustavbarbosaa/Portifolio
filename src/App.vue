<!-- eslint-disable vue/valid-template-root -->
<template>
  <headerComponent />
  <aboutMeComponent />
  <formationComponent />
  <experiencesComponent />
  <repositoriesComponent />
  <footerComponent />
</template>

<script lang="ts">
import headerComponent from './components/header/header.vue';
import aboutMeComponent from './components/main/aboutMeComponent.vue';
import experiencesComponent from './components/main/experiences.vue';
import formationComponent from './components/main/formationComponent.vue';
import repositoriesComponent from './components/main/myRepositoriesComponent.vue';
import footerComponent from './components/footer/footer.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
    aboutMeComponent,
    experiencesComponent,
    formationComponent,
    repositoriesComponent,
    footerComponent,
  },
};
</script>
