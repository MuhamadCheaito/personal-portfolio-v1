<template>
  <BaseSection>
    <template #header>
        <div id="contact" class="text-h5 text-sm-h4">
        <span style="color:#d6336a">04.</span>
        Contact Me
      </div>
    </template>
    <template #content>
      <form @submit.prevent="SendEmail">
      <v-container class="d-flex flex-column algin-start">
        <div class="text-center text-h4 text-sm-h2">Get In Touch</div>
        <div
          class="grey--text ma-2 pa-2 align-center text-center text-h5 text-sm-h4"
        >
          <v-text-field
            label="Name"
            name="name"
            v-model="name"
            @input="hideMsg"
            solo
            clearable
          ></v-text-field>
           <v-text-field
            label="Email"
            name="email"
            v-model="email"
            @input="hideMsg"
            solo
            clearable
          ></v-text-field>
        <v-textarea
          solo
          label="Message"
          name="message"
          v-model="message"
          @input="hideMsg"
          clearable
        ></v-textarea>
        </div>
      </v-container>
              <p class="msg hidden">
          Your message has been recieved!
        </p>
         <p class="errorMsg text-center">
          {{errorMsg}}
        </p>
        <div
          class="text-center"
        >
        <v-btn
          dark
          color="#953A7A"
          large
          filled
          target="_blank"
          type="submit"
        >
          <v-icon class="mr-2">mdi-send</v-icon>
          SEND Message</v-btn
        >
        </div>
      </form>
    </template>
  </BaseSection>
</template>
<script>
import emailjs from "emailjs-com";
const BaseSection = () => import("./BaseSection.vue");
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      errorMsg: '',
      message: ''
    }
  },
  components: {
    BaseSection,
  },
  props: {},
  methods:{
    SendEmail(e){
      try {
        if(!this.name || !this.email || !this.message){
          document.querySelector('.errorMsg').style.display = 'block';
          throw new Error("Please fill in the blanks!!");
        }else{
        emailjs.sendForm('service_669k27n', 'template_z1lkdqk', e.target,
        'user_4ZF29AHhPM2ISzNb0YVQQ', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        document.querySelector('.msg').style.display = 'block';
          this.name = ''
          this.email = ''
          this.message = ''
        }
      } catch(error) {
         this.errorMsg = error;
      }
    },
    hideMsg(){
    document.querySelector('.errorMsg').style.display='none';
    document.querySelector('.msg').style.display= 'none';
  }
  },
};
</script>
<style scoped>
    .msg{
      color:rgb(19, 231, 19);
      display:none;
      font-size: small;
      font-weight: 400;
      text-align: center;
    }
    .errorMsg{
      color:rgb(231, 50, 19);
      font-size: small;
      font-weight: 400;
      text-align: center;
    }
</style>