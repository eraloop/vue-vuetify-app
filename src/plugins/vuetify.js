import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
      },
      theme:{
        primary : '#E91E63',
        secondary:'#4A148C',
        success:'#3cd1c2',
        error:'#ffaa2c',
        info:'#f83e70'
      }
});
