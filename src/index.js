import Vue from 'vue';//引入vue，相当于require
import 'weui';
// 引入Xheader
import Xheader from './component/Xheader.vue';
import Xseach from './component/Xseach.vue';
import Xpanel from './component/Xpanel.vue';
import Xfooter from './component/Xfooter.vue';
import axios from 'axios';
Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    data: {
      
    },
    template: `
            <div>
                <Xheader></Xheader>
                <Xseach></Xseach>
                <Xpanel></Xpanel>
                <Xfooter></Xfooter>
            </div>`,
    components:{
        Xheader,
        Xseach,
        Xpanel,
        Xfooter
    }

    
})