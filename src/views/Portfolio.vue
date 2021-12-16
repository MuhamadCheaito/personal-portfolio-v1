<template>
  <BaseSection>
    <template #header>
      <div id="portfolio" class="text-h5 text-sm-h4">
        <span style="color: #d6336a">03.</span>
        Portfolio
      </div>
    </template>
<template #content>
<v-banner
  elevation="20"
  outlined
  width="50%"
  rounded
  dark
  style="margin:0 auto;"
  class="text-center"
>
<v-tooltip color="black" bottom>
<template v-slot:activator="{ on, attrs }">
<v-btn class="mx-2" large
icon :class="choice === 'desktop' ? 'activeClass' : ''" 
v-bind="attrs"
v-on="on"
@click="changeChoice('desktop')">
  <v-icon>mdi-desktop-mac</v-icon>
</v-btn>
</template>
  <span>Desktop apps</span>
</v-tooltip>

<v-tooltip color="black" bottom>
<template v-slot:activator="{ on, attrs }">
<v-btn class="mx-2"  dark large
icon :class="choice === 'mobile' ? 'activeClass' : ''" 
v-bind="attrs"
v-on="on"
@click="changeChoice('mobile')">
  <v-icon>mdi-cellphone</v-icon>
</v-btn>
</template>
  <span>Mobile apps</span>
</v-tooltip>
<v-tooltip color="black" bottom>
<template v-slot:activator="{ on, attrs }">
<v-btn class="mx-2" dark large
icon :class="choice === 'web' ? 'activeClass' : ''" 
v-bind="attrs"
v-on="on"
@click="changeChoice('web')">
  <v-icon>mdi-web</v-icon>
</v-btn>
</template>
  <span>Web apps</span>
</v-tooltip>
</v-banner>
      <v-container class="d-flex justify-center align-center">
        <v-row no-gutters>
            <v-card class="mx-auto my-12 d-flex flex-column justify-space-around" 
            max-width="374" :height="choice === 'mobile' ? 700 : '540'" light v-for="project in filteredData" 
            :key="project.name">
              <v-flex xs12>
                <v-img
                  width="100%"
                  :src="project.imageUrl">
                </v-img>
                </v-flex>
              <h3 class="text-center">{{project.name}}</h3>
              <v-card-text>
                <p class="text-center" v-html="project.desc">
                  
                </p>
              </v-card-text>
              <div class="font-weight-bold pink--text my-3">
                <v-icon color="pink darken-2" class="ml-2" left>
                  mdi-tag
                </v-icon>
                {{project.tags}}
              </div>
            <div class="font-weight-bold ml-2 mb-4">
              Status: <v-chip dark :color="project.status === 'Completed' ? 'green darken-2' : 'red darken-2'">
              <v-icon v-html="project.status === 'Completed' ? 'mdi-check' : 'mdi-cogs'"></v-icon>&nbsp;{{project.status}}</v-chip>
            </div>
            </v-card>
        </v-row>
      </v-container>
    </template>
  </BaseSection>
</template>

<script>
import projects from './data/projects_data'
const BaseSection = () => import("./BaseSection.vue");

export default {
  name: "Portfolio",
  data(){
    return {
        projects: projects,
        choice:'desktop'
    }
  },
  computed:{
    filteredData(){
     return this.projects.filter((item) => {
          return item.type == this.choice;
      });
    }
  },
  components: {
    BaseSection,
  },
  methods:{
    changeChoice(choice){
      this.choice = choice;
    }
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
.activeClass{
  background-color: #922457;
  color:white !important;
}
</style>