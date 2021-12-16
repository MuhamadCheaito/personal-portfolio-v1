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
            <p style="color:grey;">
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
import skills from './data/skills_data';
const BaseSection = () => import("./BaseSection.vue");
const SkillCard = () => import("@/components/SkillCard.vue");

export default {
  name: "Skills",
  data(){
     return{
      skills: skills
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