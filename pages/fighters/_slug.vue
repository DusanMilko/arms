<template>
  <section class="container">
    Slug page {{ fighter.name }}

    <p>
      <h2>health:</h2>
      {{ fighter.health }}
    </p>
  </section>
</template>

<script>
export default {
  validate ({ store, params }) {
    return store.getters.getFighter(params.slug)
  },
  async asyncData ({ store, params }) {
    let data = store.getters.getFighter(params.slug)
    return { fighter: data }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
