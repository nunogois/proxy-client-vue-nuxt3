import Vue from 'vue'
import { plugin as unleashPlugin } from '@unleash/proxy-client-vue'

const config = {
  url: 'https://unleash-proxy.nunogois.com/proxy',
  clientKey: 'ng-unleash-secret',
  refreshInterval: 2,
  appName: 'unleash-test',
  environment: 'dev'
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(unleashPlugin, { config })
})
