<template>
    <v-container>
        <v-card class="mx-auto px-12 py-6" max-width="700" outlined>
            <v-card-title class="top-avatar">
                <v-avatar left size="56" class="mt-n16 mb-6">
                    <svg
                        width="56"
                        height="56"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <circle fill="#000" cx="28" cy="28" r="28" />
                            <g fill-rule="nonzero">
                                <path
                                    d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                                    fill="#444"
                                />
                                <path
                                    d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                                    fill="#FFF"
                                />
                            </g>
                        </g>
                    </svg>
                </v-avatar>
            </v-card-title>

            <div>
                <h1 class="font-weight-bold h1 mb-2" color="hsl(0, 0%, 0%)">
                    Mastercraft Bamboo Monitor Riser
                </h1>
                <p class="subtitle-1" color="hsl(0, 0%, 48%)">
                    "Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                </p>
            </div>

            <v-card-actions class="mb-5 mt-5">
                <v-btn dark color="hsl(176, 72%, 28%)" rounded class="pa-6">
                    Back this project
                </v-btn>
                <v-spacer></v-spacer>
                <v-chip
                    pill
                    color="hsl(176, 50%, 47%)"
                    rounded
                    text-color="hsl(176, 72%, 28%)"
                    class="pa-4 grey lighten-4 font-weight-bold subtitle-1"

                >
                    <v-avatar left size="40">
                        <svg
                            width="70"
                            height="70"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle
                                    fill="hsl(176, 72%, 28%)"
                                    cx="35"
                                    cy="35"
                                    r="35"
                                />
                                <path
                                    fill="#fff"
                                    d="M23 19v18l5-5.058L33 37V19z"
                                />
                            </g>
                        </svg>
                    </v-avatar>
                    <h3>Bookmarked</h3>
                </v-chip>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {}
</script>

<style>
.top-avatar {
    display: flex;
    margin: auto;
    justify-content: center;
}
</style>