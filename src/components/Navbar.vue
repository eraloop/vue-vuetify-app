<template>
    <v-container>
        <nav>
            <v-toolbar color="transparent mt-5" flat>
                <v-app-bar-nav-icon
                    class="white--text font-weight-bold"
                    @click="drawer = !drawer"
                ></v-app-bar-nav-icon>
                <v-toolbar-title
                    text
                    class="font-weight-black white--text text-uppercase h1"
                >
                    <span>Crowd</span>
                    <span class="pink--text">fund</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-content class="hidden-md-and-down" name="v-toolbar-content">
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                text
                                rounded
                                color="white--text"
                                v-bind="attrs"
                                v-on="on"
                                to="/"
                            >
                                <v-icon small class="mx-2"> home </v-icon>
                                <span>Home</span>
                            </v-btn>
                        </template>
                        <span> Home</span>
                    </v-tooltip>
                    <v-tooltip dark top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                text
                                rounded
                                color="white--text"
                                v-bind="attrs"
                                v-on="on"
                                to="/about"
                            >
                                <v-icon small class="mx-2"> people </v-icon>
                                <span>About</span>
                            </v-btn>
                        </template>
                        <span>About</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                text
                                rounded
                                color="white--text"
                                v-bind="attrs"
                                v-on="on"
                                to="/discover"
                            >
                                <v-icon small class="mx-2"> search </v-icon>
                                <span>Discover</span>
                            </v-btn>
                        </template>
                        <span>Discover</span>
                    </v-tooltip>
                </v-toolbar-content>
                <v-btn outlined rounded large color="pink mx-4 mx-2  hidden-sm-and-down">
                    <span class="white--text">Get started</span>
                </v-btn>
            </v-toolbar>
            <v-navigation-drawer v-model="drawer" app class="purple pa-5">
                <v-toolbar app class="p-5" height="100px" flat color="purple">
                    <h1 dark class="white--text h1">Menu</h1>
                    <v-spacer></v-spacer>
                    <v-btn
                        icon
                        fab
                        color="white"
                        @click.prevent="drawer = !drawer"
                    >
                        <v-icon large color="pink">close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-toolbar-content>
                    <v-list>
                        <v-list-item
                            v-for="link in links"
                            :key="link.text"
                            router
                            :to="link.route"
                        >
                            <v-list-item-action>
                                <v-icon color="pink">{{ link.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content class="white--text">
                                {{ link.text }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-toolbar-content>
            </v-navigation-drawer>
        </nav>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {
                    icon: "home",
                    text: "Home",
                    route: "/"
                },
                {
                    icon: "people",
                    text: "About",
                    route: "/about"
                },
                {
                    icon: "search",
                    text: "Discover",
                    route: "/discover"
                }
            ]
        }
    }
}
</script>