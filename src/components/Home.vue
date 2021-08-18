<template>
    <v-container class="home-page">
        <v-row>
           <v-content class="mt-n16">
                <Card/>
                <CardProgress/>
                <MainCard />
           </v-content>
        </v-row>
    </v-container>
</template>

<script>
import Card from '@/components/Card'
import CardProgress from '@/components/CardProgress'
import MainCard from '@/components/LongCard/MainCard'
export default {
    components:{
        Card,
        CardProgress,
        MainCard
    }
}
</script>


<style>
.home-page{
    display: flex;
    justify-content:center;
    max-width: 700px;
    margin: auto;
}
</style>