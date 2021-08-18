</<template>
    <div>
        <v-card
        class="mx-auto px-12 py-4 my-8"
        max-width="700"
        outlined
        v-for="card in cards" :key="card.title"

        >
            <div class>
                <v-card-actions class="mb-3 pa-0">
                    <h3 class="font-weight-bold">{{card.title}}</h3>
                    <v-spacer></v-spacer>
                    <h5 color="hsl(176, 72%, 28%)" class="cyan--text darken-4">{{card.ptext}}</h5>
                </v-card-actions>
            </div>
            <div>
                <p class="subtitle-1 grey--text" color="hsl(0, 0%, 48%)">
                   {{card.centerText}}
                </p>
            </div>

            <v-card-actions class="mt-3">
                <h1 class="font-weight-bold pr-2">{{card.actionQty}}</h1>
                <span class="grey--text">{{card.actionSpan}}</span>
                <v-spacer></v-spacer>
                <v-btn dark color="hsl(176, 72%, 28%)" rounded class="pa-6">
                    {{card.actionBtn}}
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>
<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Bambo stand",
                    ptext: "Pledge $25 or more",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    actionQty: 101,
                    actionSpan: "left",
                    actionBtn: "Select Reward",
                    disabled: false
                },
                {
                    title: "Black edition",
                    ptext: "Pledge $75 or more",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    actionQty: 64,
                    actionSpan: "left",
                    actionBtn: "Select Reward",
                    disabled: false
                },
                {
                    title: "Mahogany Special Edition",
                    ptext: "Pledge $200 or more",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    actionQty: 0,
                    actionSpan: "left",
                    actionBtn: "Select Reward",
                    disabled: true
                }
            ]
        }
    }
}
</script>