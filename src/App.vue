<!-- eslint-disable vue/valid-template-root -->
<template>
  <headerComponent />
  <mainComponent />
  <!-- <footerComponent /> -->
</template>

<script lang="ts">
import headerComponent from './components/header/header.vue';
import mainComponent from './components/main/main.vue';
// import footerComponent from './components/footer/footer.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
    mainComponent,
    // footerComponent,
  },
};
</script>
