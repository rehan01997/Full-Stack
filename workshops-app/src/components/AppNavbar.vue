<template>
    <!--
        Install Bootstrap 4 snippets extension by Ashok Koyi
        b4-navbar-minimal-ul
    -->
    
    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container px-2">
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <!-- to="/" is also ok -->
                    <router-link class="nav-link" :to="links[0]">Home</router-link>
                </li>
                <li class="nav-item">
                    <!-- to="/workshops" is also ok -->
                    <router-link class="nav-link" :to="links[1]">List of workshops</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar',
    data() {
        return {
            links: [
                { name : 'home' },
                { name : 'workshops-list' }
            ]
        };
    }
}
</script>

<style scoped>

</style>