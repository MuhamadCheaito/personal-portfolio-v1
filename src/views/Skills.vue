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
            <v-col class="d-flex align-center justify-center">
              <v-img :src="tech.techImage" max-width="28px"></v-img>
              <v-progress-linear
                :color="tech.color"
                rounded
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
  props: {},
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
            }
          ]
       },
       {
          skillTitle: 'back-end',
          skillDesc: ` My acquired skills on both databases and back-end within
              many languages.`,
          skillIcon:'mdi-database-cog',
       },
       {
          skillTitle: 'Graphic design',
          skillDesc: `My acquired knowledge in some of the adobe desgin softwares.`,
          skillIcon:'mdi-pencil-ruler',
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