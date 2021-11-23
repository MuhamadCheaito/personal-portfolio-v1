<template>
  <BaseSection>
    <template #header>
        <div id="contact" class="text-h5 text-sm-h4">
        <span style="color:#d6336a">04.</span>
        Contact Me
      </div>
    </template>
    <template #content>
      <v-container class="d-flex flex-column algin-start">
        <div class="text-center text-h4 text-sm-h2">Get In Touch</div>
        <div
          class="grey--text ma-2 pa-2 align-center text-center text-h5 text-sm-h4"
        >
          <v-text-field
            label="Subject"
            solo
            clearable
          ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Message"
          clearable
        ></v-textarea>
        </div>
      </v-container>
        <div
          class="text-center"
        >
        <v-btn
          dark
          color="#953A7A"
          large
          filled
          href="mailto:cheaitomuhamad.92@gmail.com"
          target="_blank"
        >
          <v-icon class="mr-2">mdi-send</v-icon>
          SEND Message</v-btn
        >
        </div>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("./BaseSection.vue");
export default {
  name: "Contact",
  components: {
    BaseSection,
  },
  props: {},
};
</script>