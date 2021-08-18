<template>
    <v-container>
        <v-sheet color="white pa-8" elevation="1" max-width="700px" outlined>
            <div>
                <h3 class="mb-5 grey-text">About the project</h3>

                <p class="grey-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquid accusantium hic est, molestiae reiciendis ipsum iste
                    placeat laudantium veniam impedit et minima laborum expedita
                    voluptates veritatis saepe at? Laboriosam, alias consequatur
                    esse ipsum error at vitae necessitatibus nihil vel,
                    perspiciatis
                </p>
                <p class="grey-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                    ipsum explicabo, eaque quidem ratione at.
                </p>
            </div>
            <div>
                <FirstCard/>
            </div>
        </v-sheet>
    </v-container>
</template>

<script>
import FirstCard from '../LongCard/FirstCard'
export default {
    components:{
        FirstCard
    }
}
</script>

<style>

</style>