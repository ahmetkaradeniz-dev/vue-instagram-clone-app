<script setup>

import UserService from '../../services/UserService';

const users = UserService.getAll()
console.log(users)

</script>

<template>
    <div class="login-box">
        <h1>INSTAGRAM</h1>
    </div>
</template>

<style>
.login-box{
    border: 1px solid #ccc;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>