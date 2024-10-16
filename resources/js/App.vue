<template>
    <h1><router-link to="/">invoza.net</router-link></h1>
    <ul>
        <li><router-link to="/login">login</router-link></li>
        <li><router-link to="/register">register</router-link></li>
    </ul>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
</template>
<script setup lang="ts">
</script>
