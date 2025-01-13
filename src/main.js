import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

createApp(App).mount('#app')
