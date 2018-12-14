<template>
  <div>
    <div v-for="(item) in plug" :key="item.code">

      <v-flex xs12 lg4 >
      <v-card >
        <v-img
        style="width:100%"
          :src="require('@/static/icon.png')"
          aspect-ratio="2.75"
        ></v-img>
    
        <v-card-title text-xs-center text-md-center>

            <v-flex xs12>
              <h3 class="">Smart Bassinet</h3>
            </v-flex>
            <v-flex xs12 >
              <div>Divice Name: {{ item.name }}<br>Divice ID: {{ item.code }}</div>
            </v-flex>
        </v-card-title>
      </v-card>
      </v-flex>   


      <div class="relay" v-for="(st, idx) in item.status" :key="idx" >   
 
          <v-flex xs12> 
            <v-btn v-if="st == '1'" color="light-green darken-2" class="white--text" fab large dark @click="btn_click(item.code,st,idx)">
              <i class="fas fa-lightbulb fa-3x" v-if="st == '1'"></i>
            </v-btn>
            <v-btn v-if="st == '0'" color="grey lighten-2" class="white--text" fab large dark @click="btn_click(item.code,st,idx)">
              <i class="far fa-lightbulb fa-3x" v-if="st == '0'"></i>
            </v-btn>
          </v-flex>
            <label v-if="idx==0">ไกวเปล</label>
          <br>


      </div>
    </div> 
    

    <!-- <div  class="plug">
      {{ seq }}-
      <div class="status">
        
        
             
          
          <div>{{ st }}</div>
          <v-btn
      
     color="green lighten-1"
      class="white--text"
      style="height: 50px;"
      >
      
          <div><button @click="btn_click(item.code,st,idx)">{{ st === '0' ? 'เปิด' : (st === '1' ? 'ปิด' : '') }}</button></div>
        </v-btn>

        </div>
        
      </div>
    </div> -->

  </div>
</template>
<script>
const mqtt = require('mqtt')

export default {
  data() {
    return {
      plug: [
        { code: 'B4E62D8A171', name: 'bassinet', loc: '', status: [1,0,1] },
      ],
        
    }
  },
  created() {
    //this.client = mqtt.connect('wss://mqtt.apps.ccollege.ac.th:8084/mqtt') //เซิฟเวอร์หลัก EMQ
   // this.client = mqtt.connect('wss://mqtt2.apps.ccollege.ac.th/')  //เซิฟเวอร์สำรอง Mosca
    this.client = mqtt.connect('wss://ecart-socket.poc.xenex.io') //ครูสมศกดิ์
    this.client.on('connect', this.onMqttConnect.bind(this))
    this.client.on('message', this.onMqttMessage.bind(this))
  }, 
  beforeDestroy() {
    this.client && this.client.end()
  },

  methods: {
    btn_click(code,st,idx){
      console.log("btn_click")
      console.log(this.plug.length)
      for (let i = 0 ; i < this.plug.length ; i++){
        if (this.plug[i].code === code && idx == 0 && st == 0){this.client.publish('TA-' + this.plug[i].code, '0=1'),console.log("0=1")}
        else if(this.plug[i].code === code && idx == 0 && st == 1){this.client.publish('TA-' + this.plug[i].code, '0=0'),console.log("0=0")}

        if (this.plug[i].code === code && idx == 1 && st == 0){this.client.publish('TA-' + this.plug[i].code, '1=1'),console.log("1=1")}
        else if(this.plug[i].code === code && idx == 1 && st == 1){this.client.publish('TA-' + this.plug[i].code, '1=0'),console.log("1=0")}

        if (this.plug[i].code === code && idx == 2 && st == 0){this.client.publish('TA-' + this.plug[i].code, '2=1'),console.log("2=1")}
        else if(this.plug[i].code === code && idx == 2 && st == 1){this.client.publish('TA-' + this.plug[i].code, '2=0'),console.log("2=0")}
      }
    },
    onMqttConnect() {
      console.log('connected')
      this.client.subscribe('ttatus', err => err)
      for (let i = 0; i < this.plug.length; i++) {
        this.client.publish('TA-' + this.plug[i].code, 'ttatus')
      }
    },
    onMqttMessage(topic, message) {
      if (topic === 'ttatus') {
        console.log('GOT:', message.toString())
        let msg = message.toString()
        let code = msg.substr(0, 11) // '0002'
        let status = msg.substr(12, 4).split('') // ['0', '1', '0', '0']
        console.log('code=', code, 'ttatus', status)
        for (let i = 0; i < this.plug.length; i++) {
          if (this.plug[i].code === code) {
            this.plug[i].status = status
            // TODO: ???
          }
        }
      }
    }, // onMqttMessage
  }, // methods
}
</script>