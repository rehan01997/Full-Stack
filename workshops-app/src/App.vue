<template>
    <div id="app">
        <AppNavbar />
        <div class="container my-4">
            <!--
                <AppHome />
                <WorkshopsList />
            -->
            <router-view />
        </div>
    </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';

export default {
  name: 'App',
  components: {
      AppNavbar
  }
}
</script>

<style>

</style>