<script setup lang="ts">
import { LoginData } from '~/composables/types/interfaces'

const loginForm = ref({
  email: '',
  password: '',
});

const emits = defineEmits(['login']);

const login = () => {
  const { email, password } = loginForm.value;
  const userData: LoginData = {
    user: 'a', 
    email,
    password,
  };

  emits('login', userData); 
};
const updateEmail = (value: string) => loginForm.value.email = value;
const updatePassword = (value: string) => loginForm.value.password = value;
</script>

<template>
    <el-form ref="loginForm">
        <el-form-item label="Email">
            <el-input :modelValue="loginForm.email" @update:modelValue="updateEmail" type="email"
                placeholder="mail address" />
        </el-form-item>
        <el-form-item label="Password">
            <el-input :modelValue="loginForm.password" @update:modelValue="updatePassword" type="password" />
        </el-form-item>
        <el-col :span="1">
            <el-button type="primary" @click="login">login</el-button>
        </el-col>
    </el-form>
</template>

<style scoped>
.el-form {
    margin: 16px;
}

.el-input {
    width: 300px;
}

.warning {
    color: red;
}
</style>
