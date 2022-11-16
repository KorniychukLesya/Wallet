
import { build } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false
  ,
  nitro: {
    preset: 'node-server'
  },
 
  // ... other options
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',       
  ],
  

},

)



