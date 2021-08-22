<template>
    <v-container>
        <v-card class="mx-auto pa-12" :max-width="width" outlined flat>
            <v-container >
                <v-container>
                    <v-row  align="center" justify="center">
                    <v-col class="justify-center align-center col-md-3 col-sm-12 ">
                            <div>
                                <h2
                                    color="hsl(0, 0%, 0%)"
                                    class="mb-1 font-weight-black heading-3"
                                >
                                    $89,914
                                </h2>
                                <p class="subtitle-2 grey--text " >
                                    of $1000 backed
                                </p>
                            </div>
                    </v-col>
                    <v-col class=" justify-center align-center hidden-md-and-down col-md-1 ">
                        <div class="vl"></div>
                    </v-col>
                    <v-col class="justify-center align-center col-md-3 col-sm-12">

                            <h2
                                color="hsl(0, 0%, 0%)"
                                class="mb-1 font-weight-black heading-3 "
                            >
                                5007
                            </h2>
                            <p class="subtitle-2 grey--text">total backers</p>
                    </v-col>

                     <v-col class=" justify-center align-center hidden-md-and-down col-md-1 ">
                        <div  v-if="true" class="vl pa-6"></div>
                        <div v-else>
                            <v-divider></v-divider>
                        </div>
                    </v-col>

                    <v-col class="justify-center align-center col-md-3 col-sm-12">
                        <h2
                            color="hsl(0, 0%, 0%)"
                            class="mb-1 font-weight-black heading-3"
                        >
                            56
                        </h2>
                        <p class="subtitle-2 grey--text">days left</p>
                    </v-col>
                </v-row>
                </v-container>
                <v-container class="mt-1">
                  <v-row>
                      <v-col col-sm-12>
                        <v-progress-linear
                            height="10"
                            rounded
                            v-model="progreeBar"
                            color="hsl(176, 72%, 28%)"
                        ></v-progress-linear>
                      </v-col>
                  </v-row>
                </v-container>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            progreeBar: 75
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
.vl{
    border-left: 2px solid grey;
    height: 60px;
    /* padding-left:10px ; */
}
.value-progress{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>