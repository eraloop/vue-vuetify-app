<template>
    <v-container>
        <v-sheet color="white pa-8" elevation="0" :max-width="width" outlined>
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
                <FirstCard />

            </div>
        </v-sheet>
    </v-container>
</template>

<script>
import FirstCard from "../LongCard/FirstCard"
export default {
    components: {
        FirstCard
    },
    data(){
        return {
        }
    },
    computed:{
         width(){
            switch(this.$vuetify.breakpoint.name){
                case "xs" : return 300
                case 'sm' : return 400
                case 'md' : return 500
                case 'lg' : return 700
            }
            return true
        }
    }

}
</script>

<style>

</style>