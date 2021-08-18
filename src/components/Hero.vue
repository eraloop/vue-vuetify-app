<template>
<v-container fluid class="hero-section">
    <Navbar />
</v-container>
</template>
<script>
import Navbar from '@/components/Navbar'
export default{
    components:{
        Navbar
    }
}
</script>
<style>
.hero-section {
    height: 350px;
    width: 100%;
    background: url('../static/images/image-hero-desktop.jpg');
}

</style>