<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loginForm = ref({
  username: '',
  password: '',
});

const login = () => {
};
</script>

<script>
export default {
  middleware: 'auth', 
};
</script>
