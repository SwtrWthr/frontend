<template>
  <v-row
    justify="center"
    align-content="center"
  >
    <v-card
      width="400"
    >
      <template v-if="attempts > 0">
        <template v-if="!success">
          <v-card-title
            class="justify-center"

          >Please enter login and password
          </v-card-title>
          <v-card-text
            class="pb-0"
          >
            <v-text-field
              v-model="login"
              solo
              placeholder="login"
              height="40"
              style="max-height: 60px"
              :background-color="status ? 'rgb(255, 102, 102)' : 'white'"
              @input="status = false"
            ></v-text-field>
            <v-text-field
              v-model="password"
              solo
              placeholder="password"
              height="40"
              style="max-height: 60px"
              :background-color="status ? 'rgb(255, 102, 102)' : 'white'"
              @input="status = false"
            ></v-text-field>
          </v-card-text>
          <v-card-actions
            class="justify-center"
          >
            <v-btn
              @click="check"
            >ENTER
            </v-btn>
          </v-card-actions>
          <div
            class="text-center ma-3"
          >
        <span
        >{{attempts}} attempts</span>
          </div>
        </template>
        <template v-else>
          <v-card-text>
            <v-img
              :src="BirdImage"
              width="250px"
              height="250px"
              class="mx-auto"
            >
            </v-img>
          </v-card-text>
        </template>
      </template>
      <template v-else>
        <v-card-text class="text-center">
          <span style="color: rgb(255, 40, 80); font-size: 28px;font-weight: 700">ACCESS DENIED!</span>
        </v-card-text>
      </template>
    </v-card>
  </v-row>
</template>

<script>
import axios from 'axios'
import BirdImage from '../assets/images/bird.jpg'

export default {
  name: 'AccessControl',
  data() {
    return {
      BirdImage,
      status: false,
      login: undefined,
      password: undefined,
      firstHash: '3b682fa66d33e87dd97653097217071f',
      secondHash: undefined,
      success: false,
      attempts: 3,
    }
  },
  methods: {
    async getHASH(value) {
      const res = await axios.get('https://api.hashify.net/hash/md5/hex', {
        params: {
          value: value
        }
      })
      if(res) {
        return res.data.Digest
      }
    },

    async check() {
      const logHash = await this.getHASH(this.login)
      console.log('logHash', logHash)
      const passHash = await this.getHASH(this.password)
      console.log('passHash', passHash)
      if(logHash === this.firstHash && passHash === this.secondHash) {
        this.success = true
      } else {
        this.attempts--
        this.status = true
      }
    }
  },
  mounted () {
    try {
      const rightHash = require('E:/data.json')
      this.secondHash = rightHash.hash
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
