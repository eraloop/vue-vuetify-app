<template>
    <v-container>
        <v-card class="mx-auto pa-12" max-width="700" outlined flat>
            <v-container fluid class="">
                <v-row>
                    <v-col class="justify-center mx-2">
                        <div>
                            <h2
                                color="hsl(0, 0%, 0%)"
                                class="mb-1 font-weight-black display-1"
                            >
                                $89,914
                            </h2>
                            <p class="subtitle-2 grey--text " >
                                of $100000 backed
                            </p>
                        </div>
                    </v-col>
                    <v-col class="justify-center mx-2">
                        <div border="right">
                            <h2
                                color="hsl(0, 0%, 0%)"
                                class="mb-1 font-weight-black display-1 "
                            >
                                5007
                            </h2>
                            <p class="subtitle-2 grey--text">total backers</p>
                        </div>
                    </v-col>

                    <v-col class="justify-items-start mx-2">
                        <h2
                            color="hsl(0, 0%, 0%)"
                            class="mb-1 font-weight-black display-1"
                        >
                            56
                        </h2>
                        <p class="subtitle-2 grey--text">days left</p>
                    </v-col>
                </v-row>
                <v-container class="mt-2">
                    <v-progress-linear
                        height="10"
                        rounded
                        v-model="progreeBar"
                        color="hsl(176, 72%, 28%)"
                    ></v-progress-linear>
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
    }
}
</script>

<style>
</style>