<template>
  <el-row>
    <div>Bloger</div>
    <el-row>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </el-row>
  </el-row>
</template>
<script>
  export default {

  }
</script>
<style>

</style>
