<template>
  <BaseSection>
    <template #header>
      <div id="about" class="text-h5 text-sm-h4">
        <span style="color:#d6336a">01.</span>
        About Me
      </div>
    </template>
    <template #content>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-row align-center justify-center">
            <div class="profile-picture-container">
              <v-img
                class="mx-auto"
                :src="require('@/assets/profile.jpg')"
                :lazy-src="require('@/assets/profile.jpg')"
                height="100%"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="px-xs-0">
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#d6336a">fa-user-tag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    Hi, my name is
                    <b>Mohamad</b>.I'm a graduated <b>Computer Science</b> student working as an <b>IT Support</b> at the <b>Lebanese University</b>, and a <b>Freelance Developer</b>.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#d6336a">fa-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I am a
                    <b>Freelance Developer</b> based in <b>Lebanon</b> specializing in <b>web,</b> <b>desktop,</b> and <b>mobile development</b>. Aside from
                    <b>coding</b>, I also enjoy
                    <b>solving puzzles</b> and
                    <b>building things</b> at scale.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#d6336a">fa-tools</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    My current technology stack comprises of
                    <b>C#</b>,
                    <b>HTML</b>,<b>CSS</b>,<b>JS</b>,
                    <b>Flutter</b> and 
                    <b>Vuejs</b>.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#d6336a">fa-graduation-cap</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I got my Bachelor's Degree in
                    <b>Computer Science</b> at
                    <b>Lebanese University</b>, specializing in Software
                    Technology. I finished my
                    <b>Master's Degree</b> in
                    <b>Computer Science</b> at
                    <b>American University Of Culture And Education (AUCE).</b>
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#d6336a">far fa-thumbs-up</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I'm a
                    <b>gamer</b> and an
                    <b> language lover</b>, who loves to learn french,spanish and japanese
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </BaseSection>
</template>
<style>
.profile-picture-container {
  overflow: hidden;
  max-width: 300px;
  height: 300px;
  text-align: center;
  box-shadow: #ed0c58 0 0 10px 3px;
  border-radius:50%;
}
</style>
<script>
const BaseSection = () => import("./BaseSection.vue");
export default {
  name: "About",
  props: {},
  components: {
    BaseSection,
  },
};
</script>