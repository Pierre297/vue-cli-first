<template>
    <div class="hello">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}

</style>