<!-- eslint-disable vue/valid-template-root -->
<template>
  <headerComponent />
  <aboutMeComponent />
  <experiencesComponent />
  <!-- <footerComponent /> -->
</template>

<script lang="ts">
import headerComponent from './components/header/header.vue';
import aboutMeComponent from './components/main/aboutMeComponent.vue';
import experiencesComponent from './components/main/experiences.vue';
// import footerComponent from './components/footer/footer.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
    aboutMeComponent,
    experiencesComponent,
    // footerComponent,
  },
};
</script>
