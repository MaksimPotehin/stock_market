<template>
  <el-container>
    <div class="auth">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </el-container>
</template>

<script>

export default {
  name: 'Auth'
}
</script>

<style scoped>
.auth {
  padding: 15px;
  max-width: 500px;
  width: 100%;
  margin: 100px auto 50px auto;
}
</style>
