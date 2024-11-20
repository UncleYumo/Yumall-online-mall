import { createSSRApp } from "vue"
import App from "./App.vue"

import piniaStore from "./stores/index"

export function createApp() {

  const app = createSSRApp(App)
  app.use(piniaStore)

  return {
    app
  }
}
