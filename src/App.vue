<!-- eslint-disable vue/valid-template-root -->
<template>
  <headerComponent />
  <aboutMeComponent />
  <formationComponent />
  <experiencesComponent />
  <!-- <footerComponent /> -->
</template>

<script lang="ts">
import headerComponent from './components/header/header.vue';
import aboutMeComponent from './components/main/aboutMeComponent.vue';
import experiencesComponent from './components/main/experiences.vue';
import formationComponent from './components/main/formationComponent.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
    aboutMeComponent,
    experiencesComponent,
    formationComponent,
    // footerComponent,
  },
};
</script>
