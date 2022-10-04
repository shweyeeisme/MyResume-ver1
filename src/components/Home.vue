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
          <router-link to="Projects" style="text-decoration:none;color:black;font-weight: bold;">Projects</router-link>
        </v-btn>
        <v-btn text rounded>
          <router-link to="Others" style="text-decoration:none;color:black;font-weight: bold;">Others</router-link>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-card class="mx-auto" width="1000" height="600px">
      <v-card height="200px">
        <v-card height="250" class="py-12 px-8" color="blue">
          <v-container>
            <v-row>
              <v-col>
                <v-img max-width="190px" height="250px" :src="require('../assets/myphoto.jpg')">
                </v-img>
              </v-col>
              <v-col>
                <br>
                <v-row style="height:70px">
                  <div style="font-family:Impact;color:white">
                    <h1>Shwe Yee Win Htet</h1>
                  </div>
                </v-row>
                <v-row style="height:50px">
                  <div style="font-family:Constantia;color:white">
                    <h3><i>Fullstack Engineer</i></h3>
                  </div>
                </v-row>
                <v-row style="marging-right:auto">
                  <v-col>
                    <div style="display: flex;">
                      <a href="https://www.facebook.com/shweyee.win.37" style="text-decoration:none">
                        <v-icon size="33">mdi-facebook</v-icon>
                      </a>
                      <a href="https://www.linkedin.com/in/shwe-yee-457765252" style="text-decoration:none">
                        <v-icon size="33">mdi-linkedin</v-icon>
                      </a>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>

        </v-card>
        <br><br><br>
        <v-container>
          <v-row>
            <v-col>
              <v-card style="font-family: 'Tahoma';width:500;text-align:left" flat>
                <!-- <div style="font-family:'Candara';text-align:left"> -->
                <h1>About <span style="color:#2196F3">Me</span></h1><br>
                <!-- </div> -->
                <div style="font-family: 'Geneva';font-size:16px">
                  Hello! I am Shwe.I am web develper in 5 year experience.
                  <br>I can speak three languages such as burmese, japanese and english.
                  <br>Among them, burmese language is my native language.

                </div>
              </v-card>
            </v-col>
            <v-col style="font-family: 'Geneva';font-size:18px">
              <v-simple-table>
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td>Residence</td>
                    <td>Japan</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>Tokyo,Japan</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>shweyeeisme@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Freelance</td>
                    <td>Available</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

