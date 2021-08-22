<template>
    <v-container>
        <v-card class="mx-auto px-12 py-6" :max-width="width" outlined>
            <v-card-title class="top-avatar ">
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
                    "Turns out semicolon-less style is easier and safer in TS
                    Lorem ipsum dolor
                </p>
            </div>

            <v-card-actions>
                <v-container>
                    <v-row class="row-reverse" align="center" justify="center">
                        <v-col class="col-sm-12 col-md-4" >
                            <v-btn
                                dark
                                color="hsl(176, 72%, 28%)"
                                rounded
                                class="py-6"
                                @click="dialog = !dialog"
                            >
                                Back this project
                            </v-btn>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="col-sm-12 col-md-4" order-xs="1">
                            <template v-slots:activator="{ on }">
                                <v-chip
                                    pill
                                    color="grey lighten-2"
                                    class="grey--text py-6 pl-0 pr-6"
                                    rounded
                                    flat
                                    v-on="on"
                                >
                                    <v-img>
                                        <svg
                                            width="56"
                                            height="56"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g fill="none" fill-rule="evenodd">
                                                <circle
                                                    fill="hsl(176, 72%, 28%)"
                                                    cx="28"
                                                    cy="28"
                                                    r="28"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M23 19v18l5-5.058L33 37V19z"
                                                />
                                            </g>
                                        </svg>
                                    </v-img>
                                    <h3 class="px-2">Bookmark</h3>
                                </v-chip>
                            </template>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>

        <!-- popup starts here -->

        <div class="text-center">
            <v-dialog v-model="dialog" width="350">
                <v-card class="pa-6">
                    <div class="justify-center align-center">
                        <h2 class="mb-3 pl-12" justify="center" align="center">
                            Welcome !!!..
                        </h2>
                        <p
                            class="
                                subtitle-2
                                grey--text
                                px-6
                                align-center
                                justify-center
                            "
                        >
                            We are happy that you took this bold step towards
                            the success of this project
                        </p>
                    </div>

                    <v-card-actions class="align-center justify-center">
                        <v-btn
                            dark
                            color="hsl(176, 72%, 28%)"
                            rounded
                            class="pa-6"
                            @click="secondDialog = !secondDialog"
                        >
                            Continue to Pledge
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <!-- second popup starts here  -->

        <div class="text-center">
            <v-dialog v-model="secondDialog" width="650" height="100%">
                <v-sheet class="pa-6">
                    <v-row class="pa-6">
                        <h3>Back this projects</h3>
                        <v-spacer></v-spacer>
                        <v-btn text @click.prevent="closeDialog">
                            <v-icon outlined color="hsl(176, 72%, 28%)">
                                close</v-icon
                            >
                        </v-btn>
                    </v-row>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, quod.
                    </p>

                    <v-expansion-panels
                        class="mx-auto py-2 my-2 tile flat"
                        max-width="700"
                        outlined
                        v-for="card in cards"
                        :key="card.title"
                        outline
                    >
                        <v-expansion-panel class="elevation-0">
                            <div class="grid-second-popup px-4">
                                <div class="popup-checkbox-section cols-md-2">
                                    <v-checkbox
                                        v-model="card.checkbox"
                                        class="checkbox"
                                        type="checkbox"
                                        color="hsl(176, 72%, 28%)"
                                        required
                                    ></v-checkbox>
                                </div>
                                <v-expansion-panel-header disable-icon-rotate>
                                    <div class="cols-md-10">
                                        <div>
                                            <v-card-actions class="mb-3 pa-0">
                                                <h4 class="font-weight-bold">
                                                    {{ card.title }}
                                                </h4>
                                                <span
                                                    color="hsl(176, 72%, 28%)"
                                                    class="
                                                        px-6
                                                        cyan--text
                                                        ptext
                                                    "
                                                    @click.prevent="
                                                        pledgeComplete(
                                                            card.minAmount
                                                        )
                                                    "
                                                >
                                                    {{ card.ptext }}
                                                </span>
                                                <v-spacer></v-spacer>
                                                <div>
                                                    <h4
                                                        class="
                                                            font-weight-bold
                                                            pr-2
                                                        "
                                                    >
                                                        {{ card.actionQty }}
                                                    </h4>
                                                    <span class="grey--text">{{
                                                        card.actionSpan
                                                    }}</span>
                                                </div>
                                            </v-card-actions>
                                        </div>
                                        <div>
                                            <p class="subtitle-2 grey--text">
                                                {{ card.centerText }}
                                            </p>
                                        </div>
                                    </div>
                                </v-expansion-panel-header>
                            </div>
                            <v-expansion-panel-content>
                                <v-divider fluid></v-divider>
                                <v-card-actions>
                                    <v-container>
                                        <v-row>
                                            <v-col >
                                                <v-text-field
                                                    color="hsl(176, 72%, 28%)"
                                                    label="Enter your pledge"
                                                    v-model="card.amount"
                                                ></v-text-field>
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col>
                                                <v-btn
                                                    outlined
                                                    rounded
                                                    class="pa-5"
                                                    @click.prevent="
                                                        pledgeComplete(
                                                            card.minAmount,
                                                            card.title
                                                        )
                                                    "
                                                >
                                                    <v-icon left small>
                                                        $
                                                    </v-icon>
                                                    {{ card.minAmount }}
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-btn
                                                    :disabled="
                                                        disable(card.amount)
                                                    "
                                                    @click.prevent="
                                                        pledgeComplete(
                                                            card.amount,
                                                            card.title
                                                        )
                                                    "
                                                    dark
                                                    color="hsl(176, 72%, 28%)"
                                                    rounded
                                                    class="pa-5"
                                                >
                                                    Pledge
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-actions>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-sheet>
            </v-dialog>
        </div>

        <!-- final popup -->

        <div class="text-center">
            <v-dialog v-model="pledgeCompleted" width="300">
                <v-card class="pa-6">
                    <v-card-title class="top-avatar">
                        <v-avatar left size="56">
                            <svg
                                width="56"
                                height="56"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <circle
                                        fill="#3CB3AB"
                                        cx="28"
                                        cy="28"
                                        r="28"
                                    />
                                    <path
                                        stroke="#FFF"
                                        stroke-width="5"
                                        d="M20 31.86L28.093 40 44 24"
                                    />
                                </g>
                            </svg>
                        </v-avatar>
                    </v-card-title>

                    <div class="justify-center align-center">
                        <h3>Thanks for your support!</h3>
                        <p class="grey--text">
                            You just donated
                            <span class="font-weight-bold" color="red"
                                >${{ currentPledge.currentCardAmount }}</span
                            >
                            to the
                            <span class="font-weight-bold" color="red">{{
                                currentPledge.currentCardTitle
                            }}</span>
                        </p>
                    </div>

                    <v-card-actions class="align-center justify-center">
                        <v-btn
                            dark
                            color="hsl(176, 72%, 28%)"
                            rounded
                            class="pa-6"
                            @click.prevent="closeDialog"
                        >
                            Thank You
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <!-- end of final popup -->
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            secondDialog: false,
            amount: "",
            pledgeCompleted: false,
            currentPledge: {
                currentCardTitle: "",
                currentCardAmount: ""
            },
            cards: [
                {
                    title: "Pledge with no reward",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    amount: "" || 0,
                    minAmount: 0
                },
                {
                    title: "Bambo stand",
                    ptext: "Pledge $25 or more",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    actionQty: 101,
                    actionSpan: "left",
                    actionBtn: "Select Reward",
                    disabled: false,
                    checkbox: false,
                    amount: "" || 25,
                    minAmount: 25
                },
                {
                    title: "Black edition",
                    ptext: "Pledge $75 or more",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    actionQty: 64,
                    actionSpan: "left",
                    actionBtn: "Select Reward",
                    disabled: false,
                    checkbox: false,
                    amount: "" || 75,
                    minAmount: 75
                },
                {
                    title: "Mahogany Special Edition",
                    ptext: "Pledge $200 or more",
                    centerText: `Turns out semicolon-less style is easier and safer in TS Lorem ipsum dolor
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, accusantium!`,
                    actionQty: 0,
                    actionSpan: "left",
                    actionBtn: "Select Reward",
                    disabled: true,
                    checkbox: false,
                    amount: "" || 200,
                    minAmount: 200
                }
            ]
        }
    },
    computed: {
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs" : return 300
                case "sm":
                    return 400
                case "md":
                    return 500
                case "lg":
                    return 700
            }
            return true
        }
    },
    methods: {
        closeDialog() {
            this.dialog = !this.dialog
            this.secondDialog = !this.secondDialog
            this.pledgeCompleted = false
        },
        pledgeComplete(amount, title) {
            console.log(amount)
            this.pledgeCompleted = !this.pledgeCompleted
            this.currentPledge.currentCardTitle = title
            this.currentPledge.currentCardAmount = amount
        },
        disable(amount) {
            return amount < 0 ? true : false
        }
    }
}
</script>

<style>
.top-avatar {
    display: flex;
    margin: auto;
    justify-content: center;
}
.ptext {
    cursor: pointer;
}
.checkbox {
    /* height: 10px;
    width: 10px; */
    display: none;
    border-radius: 100%;
}
.grid-second-popup {
    display: grid;
    grid-template-columns: 5% 95%;
    /* grid-gap: 10px; */
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.popup-checkbox-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -70px;
}

@media(max-width: 700px){
    .row-reverse{
        display: flex;
        flex-direction: row-reverse;
    }
}
</style>