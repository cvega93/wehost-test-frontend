<template>
    <div id="app">
        <div class="container-fluid">
            <router-view></router-view>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import AppFooter from './components/AppFooter'

    export default {
        name: 'app',
        components: {
            AppFooter
        }

    }
</script>

<style lang="scss">
    @import './assets/scss/default';
</style>
