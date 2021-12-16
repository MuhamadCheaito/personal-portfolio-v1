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
const BaseSection = () => import("./BaseSection.vue");

export default {
  name: "Portfolio",
  data(){
    return {
        projects:[{
          name:"Inventory System",
          desc:`The system provides information to efficiently manage the flow
                  of products , effectively utilize people and equipment ,
                  coordinate internal activities and communicate with customers.`,
          imageUrl:require('@/assets/projects/inventory-system.png'),
          type:"desktop",
          tags: 'C# (WPF), MVVM, SQL Server',
          status:'Completed'
        },
        {
          name:"Car System",
          desc:`This project was built based on the client’s requests where
                  the user can login, add, edit and remove
                  cars/suppliers/transits also converting from USD to Naira and much more.`,
          imageUrl:require('@/assets/projects/car-project.png'),
          type:"desktop",
          tags: 'C# (Winforms), ADO.NET, SQL Server',
          status:'Completed'
        },
        {
          name:"MyReads App",
          desc:`The Application is responsible for developing a habit of
                  reading where you can add books by searching through the
                  GoodReads API and add your reading progress to your profile.`,
          imageUrl:require('@/assets/projects/my-reads-app.png'),
          type:"mobile",
          tags: 'Flutter, Dart, Firebase',
          status:'Under Development'
        },
        {
          name:"BMI Calculator UI",
          desc:`The Application is responsible for taking a sample of
                  information to calculate the BMI of the given sample,app is
                  build based on a design from
                  <v-btn
                    text
                    color="primary"
                    href="https://dribbble.com/shots/4585382-Simple-BMI-Calculator"
                    target="_blank"
                    >dribbble.com</v-btn>`,
          imageUrl:require('@/assets/projects/bmi-calculator.png'),
          type:"mobile",
          tags: 'Flutter (UI), Dart',
          status:'Completed'
        },
        {
          name:"Lab Al-hadi",
          desc:`The website is built via WordPress my job is to support the
                website by doing long to short time tasks improving it’s design
                by using bit of CSS,adding plugins and also working on the
                back-end.`,
          imageUrl:require('@/assets/projects/lab-alhadi.png'),
          type:"web",
          tags: 'WordPress, PHP, MYSQL',
          status:'Under Development'
        },
        {
          name:"Movie Web App",
          desc:`This static website is built for fun by using themoviedb.org API
                it can search for movies and shows an overview when the user 
                hovers over the movie's card.`,
          imageUrl:require('@/assets/projects/movie-website.png'),
          type:"web",
          tags: 'HTML5, CSS, Vanilla JS',
          status:'Completed'
        },
        {
          name:"Split Landing Page",
          desc:`This static website is built for fun by only html, css and 
                javascript it when the user hovers the hovered content extends
                in width with some cool transitions effects.`,
          imageUrl:require('@/assets/projects/landing-page-template.png'),
          type:"web",
          tags: 'HTML5, CSS, Vanilla JS',
          status:'Completed'
        },
        {
          name:"Portfolio Challenge",
          desc:`This static website is a challenge offered by a codementor.com
          in which they provide screenshots of the design and the challenge is 
          to obtain the same design.`,
          imageUrl:require('@/assets/projects/protfolio-clone-challenge.png'),
          type:"web",
          tags: 'HTML5, CSS, Vanilla JS',
          status:'Completed'
        },
        {
          name:"Wikipedia Search Api",
          desc:`This web application is built using angular,css
          and bulma css framework, the user types something and the app 
          fetches the results from wikipedia.com after clicking Return 
          on the keyboard.`,
          imageUrl:require('@/assets/projects/wikipedia-api.png'),
          type:"web",
          tags: 'Angular, Typescript, Bulma',
          status:'Completed'
        },
        {
          name:"Highlight Extractor",
          desc:`This personal web application is built using flask and python,
          using my notion account credentials this app helps me extract highlights
          from pdf books and import them to my own notion template.`,
          imageUrl:require('@/assets/projects/notion-extractor.png'),
          type:"web",
          tags: 'Python, Flask, Notion-py',
          status:'Completed'
        },
        {
          name:"Tic Tac Toe",
          desc:`This small game was built for fun with angular where the user 
                can play with no AI implemented.`,
          imageUrl:require('@/assets/projects/tic-tac-toe.png'),
          type:"web",
          tags: 'Angular, Typescript, Material Design',
          status:'Completed'
        },
        {
          name:"Amazon Clone",
          desc:`This web app was built with react in order to extend
                my knowledge and learn react.`,
          imageUrl:require('@/assets/projects/amazon-clone.png'),
          type:"web",
          tags: 'React, JSX',
          status:'Under Development'
        },
        {
          name:"Dating App",
          desc:`This web app was built with angular and asp.net webapi where the user can 
                register or login and his credentials are protected using JWT Token and 
                also can date other users.`,
          imageUrl:require('@/assets/projects/dating-app.png'),
          type:"web",
          tags: 'Angular, Asp.net WebApi',
          status:'Under Development'
        },
        {
          name:"BNB Investment App",
          desc:`This web app was built with node.js and sqlite using sequelize where the admin 
                login and setup an appoinetment for a donation process,for people to donate
                BNB to his metamask credentials`,
          imageUrl:require('@/assets/projects/node-metamask.png'),
          type:"web",
          tags: 'Nodejs, Web3, Passportjs, Bootstrap',
          status:'Stopped'
        },
        {
          name:"Personal Portoflio",
          desc:`This web app was built with vuejs and vuetify it contains some cool animations 
                and some reused components that can be used in future projects.`,
          imageUrl:require('@/assets/projects/personal-portfolio.png'),
          type:"web",
          tags: 'Vue, Vuetify',
          status:'Completed'
        },
        {
          name:"Computer Design Page",
          desc:`This static website was designed for a client on upwork.com using 
                HTML and CSS only, and the client was satisfied with it.`,
          imageUrl:require('@/assets/projects/upwork-simple.png'),
          type:"web",
          tags: 'HTML, CSS',
          status:'Completed'
        },
        ],
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