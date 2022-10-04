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

        <v-card>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                        <v-card-title class="purple lighten-2">

                            <h2 class="text-h4 white--text font-weight-light">
                                経歴書管理システム
                            </h2>
                        </v-card-title>
                        <v-container>
                            <v-row>
                                概要 : 応募者の履歴書を管理するシステム<br>
                                担当部分 : 開発エンジンニア
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="amber lighten-1" fill-dot left small>
                    <v-card>
                        <v-card-title class="amber lighten-1 justify-end">
                            <h2 class="text-h4 mr-4 white--text font-weight-light">
                                不動産システム
                            </h2>

                        </v-card-title>
                        <v-container>
                            <v-row>
                                概要 : 部屋を借りるシステム<br>
                                担当部分 : 開発エンジンニア
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="cyan lighten-1" fill-dot right>
                    <v-card>
                        <v-card-title class="cyan lighten-1">

                            <h2 class="text-h4 white--text font-weight-light">
                                Javaサブ講師
                            </h2>
                        </v-card-title>
                        <v-container>
                            <v-row>
                                概要 : Javaエンジニア育成の新入社員研修中、
                                プログラミング演習などで、
                                受講者に対するサポートが必要場合に支援<br>
                                担当部分 : サブ講師
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="red lighten-1" fill-dot left small>
                    <v-card>
                        <v-card-title class="red lighten-1 justify-end">
                            <h2 class="text-h4 mr-4 white--text font-weight-light">
                                サーバー運用保守
                            </h2>

                        </v-card-title>
                        <v-container>
                            <v-row>
                                概要 : クラウドサービスのサーバー運用保守<br>
                                担当部分 : 開発エンジンニア
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="green lighten-1" fill-dot right>
                    <v-card>
                        <v-card-title class="green lighten-1">

                            <h2 class="text-h4 white--text font-weight-light">
                                飲食店システム、ゲーム
                            </h2>
                        </v-card-title>
                        <v-container>
                            <v-row>
                                概要 : 飲食店の営業管理のカスタマイズ、ゲームプロジェクト<br>
                                担当部分 : 開発エンジンニア
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item color="#F8BBD0" fill-dot left small>
                    <v-card>
                        <v-card-title class="pink lighten-4 justify-end">
                            <h2 class="text-h4 mr-4 white--text font-weight-light">
                                ブリッジSE
                            </h2>

                        </v-card-title>
                        <v-container>
                            <v-row>
                                概要 : フィリピン人と日本人の間にブリッジS Eとして担当<br>
                                担当部分 : 通訳、設計書作成、テスティング
                            </v-row>
                        </v-container>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card>
    </v-app>
</template>