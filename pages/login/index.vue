<script setup lang="ts">
import { auth } from '~/composables/auth';
import { LoginData } from '~/composables/types/interfaces';

const login = (userData: LoginData) => {
  if (auth().login(userData)) {
    useRouter().push('/home');
  } else {
    console.error('Login failed: Invalid credentials');
  }
};
</script>

<template>
  <div>
    <LoginForm @login="login" />
  </div>
</template>