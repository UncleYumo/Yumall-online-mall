import * as Pinia from 'pinia';
import { createUnistorage } from 'pinia-plugin-unistorage'
 
const piniaStore = Pinia.createPinia();
 
piniaStore.use(createUnistorage())
 
export default piniaStore;