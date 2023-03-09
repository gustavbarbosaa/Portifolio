<template>
  <div class="container">
    <div class="card-experience">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'cardExperience',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style>
  .card-experience {
    padding: 1rem;
    margin-bottom: 2rem;
    color: #2a352e;
    height: 200px;
    width: 200px;
    background-color: #DDDDDD;
    border-radius: 0px 15px;
    font-size: 14px;
  }

  .card-experience h2 {
    width: 100%;
    margin-top: 0;
    padding-bottom: 5px;
    border-bottom: 0.4px solid #4444446b;
  }

  div p {
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }
</style>
