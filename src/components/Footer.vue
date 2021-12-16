<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — &copy; <strong>Mohamad Cheaito</strong>   
        <v-spacer></v-spacer> 
               <div>Built with <v-icon light color="#00a2ff">mdi-vuetify</v-icon>&amp; <v-icon light color="#00ffa2">mdi-vuejs</v-icon></div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          dark
          icon
        >
          <v-icon size="24px"> 
              {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-github',
      ],
    }),
  }
</script>