
<template>
    <v-app>
        <v-card height="70px" class="mx-auto" width="1000" flat>
            <v-toolbar flat style="font-family:Geneva">
                <v-toolbar-title>
                    <h1><span style="color:#2196F3">Shwe</span>Yee</h1>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text rounded>
                    <router-link to="/" style="text-decoration:none;color:black;font-weight: bold;">Home</router-link>
                </v-btn>
                <v-btn text rounded>
                    <router-link to="Projects" style="text-decoration:none;color:black;font-weight: bold;">Projects
                    </router-link>
                </v-btn>
                <v-btn text rounded>
                    <router-link to="Others" style="text-decoration:none;color:black;font-weight: bold;">Others
                    </router-link>
                </v-btn>
            </v-toolbar>
        </v-card>

        <v-card class="mx-auto" width="1000" height="550px">
            <v-container class="fill-height" fluid style="min-height: 434px">
                <v-toolbar flat>
                    <v-row>
                        <v-col>
                            <v-toolbar-title class="pink--text">
                                <h1 style="font-family:Impact">My Hobby</h1>
                            </v-toolbar-title>
                        </v-col>
                    </v-row>
                </v-toolbar>
                <v-fade-transition mode="out-in">
                    <v-row>
                        <v-col cols="6">
                            <v-card>
                                <v-img :src="require('../assets/game.png')" height="125" class="grey darken-4"></v-img>
                                <v-card-title class="text-h6">
                                    Playing Game
                                </v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card>
                                <v-img :src="require('../assets/driving.jpeg')" height="125" contain
                                    class="grey darken-4"></v-img>
                                <v-card-title class="text-h6">
                                    Driving
                                </v-card-title>
                            </v-card>
                        </v-col>

                        <v-col cols="6">
                            <v-card>
                                <v-img :src="require('../assets/movie.jpeg')" max-height="125" class="grey darken-4">
                                </v-img>
                                <v-card-title class="text-h6">
                                    Watching Movie
                                </v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="6">
                            <v-card>
                                <v-img :src="require('../assets/cooking.jpeg')" max-height="125" contain
                                    class="grey darken-4"></v-img>
                                <v-card-title class="text-h6">
                                    Cooking
                                </v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-fade-transition>
            </v-container>
        </v-card>
    </v-app>
</template>
  
<script>
export default {
    data: () => ({
    })
}
</script>
  
  