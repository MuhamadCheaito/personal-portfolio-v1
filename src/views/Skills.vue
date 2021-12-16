<template>
  <BaseSection>
    <template #header>
      <div id="skills" class="text-h5 text-sm-h4">
        <span style="color: #d6336a">02.</span>
        Skills
      </div>
    </template>
    <template #content>
      <v-container class="d-flex justify-center align-center flex-wrap">
        <SkillCard v-for="skill in skills" :key="skill.skillTitle">
          <template #card__front--content>
            <v-icon color="#d6336a" class="my-2" size="75px">
              {{skill.skillIcon}}
            </v-icon>
            <h2 class="card__title my-2">{{skill.skillTitle}}</h2>
            <p style="color: grey my-2">
              {{skill.skillDesc}}
            </p>
          </template>
          <template #card__back--content>
          <v-row v-for="tech in skill.acquiredTechs" :key="tech.name">
            <v-col class="py-1 d-flex align-center justify-center">
              <v-img :src="tech.techImage" max-width="28px"></v-img>&nbsp;
              <v-progress-linear
                :color="tech.color"
                striped
                :value="tech.progress"
              ></v-progress-linear>&nbsp;<span>{{tech.progress}}%</span>
            </v-col>
          </v-row>
          </template>
        </SkillCard>
      </v-container>
    </template>
  </BaseSection>
</template>

<script>
const BaseSection = () => import("./BaseSection.vue");
const SkillCard = () => import("@/components/SkillCard.vue");
export default {
  name: "Skills",
  data(){
     return{
      skills:[
       {
          skillTitle: 'FRONT-END',
          skillDesc: `My peripheral knowledge in javascript frameworks 
              front-end skills.`,
          skillIcon:'mdi-desktop-mac-dashboard',
          acquiredTechs:[
            {
                name:"html",
                techImage:require('@/assets/icons/html-5.svg'),
                color:"red darken-2",
                progress:"95",
            },
            {
                name:"css",
                techImage:require('@/assets/icons/css3.svg'),
                color:"blue darken-2",
                progress:"90",
            },
             {
                name:"scss",
                techImage:require('@/assets/icons/sass.svg'),
                color:"pink",
                progress:"60",
            },
            {
                name:"js",
                techImage:require('@/assets/icons/javascript.svg'),
                color:"yellow darken-2",
                progress:"86",
            },
            {
                name:"vue",
                techImage:require('@/assets/icons/vue-js.svg'),
                color:"green darken-2",
                progress:"68",
            },
             {
                name:"angular",
                techImage:require('@/assets/icons/angular.svg'),
                color:"red darken-2",
                progress:"40",
            },
            {
                name:"react",
                techImage:require('@/assets/icons/react.svg'),
                color:"blue darken-2",
                progress:"50",
            },
            {
                name:"bootstrap",
                techImage:require('@/assets/icons/bootstrap-4.svg'),
                color:"purple darken-2",
                progress:"90",
            },
          ]
       },
       {
          skillTitle: 'back-end',
          skillDesc: ` My acquired skills on both databases and back-end within
              many languages.`,
          skillIcon:'mdi-database-cog',
          acquiredTechs:[
            {
                name:"csharp",
                techImage:require('@/assets/icons/c-sharp.svg'),
                color:"purple darken-2",
                progress:"90",
            },
            {
                name:"dotnet",
                techImage:require('@/assets/icons/dotnet.svg'),
                color:"blue",
                progress:"70",
            },
             {
                name:"mysql",
                techImage:require('@/assets/icons/mysql.svg'),
                color:"blue",
                progress:"80",
            },
            {
                name:"mongodb",
                techImage:require('@/assets/icons/mongodb.svg'),
                color:"green darken-1",
                progress:"40",
            },
            {
                name:"firebase",
                techImage:require('@/assets/icons/firebase.svg'),
                color:"yellow darken-2",
                progress:"67",
            },
             {
                name:"laravel",
                techImage:require('@/assets/icons/laravel.svg'),
                color:"red darken-2",
                progress:"45",
            },
            {
                name:"python",
                techImage:require('@/assets/icons/python.svg'),
                color:"yellow darken-1",
                progress:"60",
            },
            {
                name:"nodjs",
                techImage:require('@/assets/icons/nodejs.svg'),
                color:"green darken-2",
                progress:"70",
            },
          ]
       },
       {
          skillTitle: 'Other Skills',
          skillDesc: `My acquired other skills in multi different technologies.`,
          skillIcon:'mdi-pencil-ruler',
          acquiredTechs:[
            {
                name:"git",
                techImage:require('@/assets/icons/git.svg'),
                color:"red darken-1",
                progress:"60",
            },
            {
                name:"flutter",
                techImage:require('@/assets/icons/flutter.svg'),
                color:"blue",
                progress:"70",
            },
             {
                name:"docker",
                techImage:require('@/assets/icons/docker.svg'),
                color:"blue darken-2",
                progress:"40",
            },
            {
                name:"kubernetes",
                techImage:require('@/assets/icons/kubernetes.svg'),
                color:"blue darken-1",
                progress:"20",
            },
            {
                name:"wordpress",
                techImage:require('@/assets/icons/wordpress.svg'),
                color:"blue darken-2",
                progress:"85",
            },
             {
                name:"php",
                techImage:require('@/assets/icons/php.svg'),
                color:"purple darken-2",
                progress:"80",
            },
            {
                name:"photoshop",
                techImage:require('@/assets/icons/adobe-photoshop-2.svg'),
                color:"blue darken-1",
                progress:"75",
            },
            {
                name:"java",
                techImage:require('@/assets/icons/java.svg'),
                color:"red darken-3",
                progress:"50",
            },
          ]
       },
      ]
     }
  },
  components: {
    BaseSection,
    SkillCard,
  },
};
</script>
<style scoped>
.card__title {
  font-size: 1.3rem;
  transform: var(--level-three);
  text-transform: uppercase;
}
</style>