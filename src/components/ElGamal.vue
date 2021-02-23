<template>
  <div>
    <v-row
      class="justify-center"
    >
      <v-col
        cols="6"
        class="text-center my-10"
      >
        <v-card
          height="600"
          class="pa-5"
        >
          <div>
            <p class="text-h4 font-weight-bold">
              Sherlock's Brain
            </p>
            <v-img
              class="mx-auto"
              src="https://lh3.googleusercontent.com/proxy/cUwoW9fKM-hBtwZoUrBhH7WltRXsvbsEcEAhxM1KQvB6TnAIPFtFE-k5NhD8HIAxUyAU7RRiNQTc4QSGtplI2ONG5wGscJUpNCMXOFKhoizGjV6iSMPPsJWLC487E9zwOwzl9TQjryicCCzXKuVpAFGN"
              max-height="70"
              max-width="70"
            ></v-img>
          </div>
          <v-textarea
            solo
            v-model="msg"
            class="mt-5"
            background-color="gray"
            :label="'Text for ' + (ed > 0 ? 'decrypt' : 'encrypt')"
            color="black"
            height="100"
          >
          </v-textarea>
          <v-row
            justify="center"
          >
            <v-col
              cols="6"
              class="text-center"
            >
              <v-radio-group
                v-model="ed"
                class="ml-12 mt-0"
                dark
                row
              >
                <v-radio
                  label="Encrypt"
                  :value="0"
                  color="white"
                  :ripple="false"
                ></v-radio>
                <v-radio
                  label="Decrypt"
                  :value="1"
                  color="white"
                  :ripple="false"
                ></v-radio>
              </v-radio-group>
              <v-btn
                class="text-capitalize font-weight-bold"
                large
                :ripple="false"
                @click="start"
              >
                {{ed > 0 ? 'Decrypt' : 'Encrypt'}}
              </v-btn>

            </v-col>
            <v-col cols="12">
              <p
                v-if="dText"
                v-text="dText"
                class="ma-3 font-weight-bold text-h5 py-3"
                style="background-color: white; color: black;border-radius: 10px"></p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ElGamal',
  data () {
    return {
      en_msg: [],
      ed: 0,
      dText: undefined,
      msg: undefined
    }
  },
  methods: {
    gcd (a, b) {
      if (a < b) {
        return this.gcd(b, a)
      } else if (a % b === 0) {
        return b
      } else {
        return this.gcd(b, a % b)
      }
    },

    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    gen_key (q) {
      let key = this.getRandomInt(1, q)
      while (this.gcd(q, key) !== 1) {
        key = this.getRandomInt(1, q)
      }
      return key
    },

    power (a, b, c) {
      let x = 1
      let y = a

      while (b>0) {
        if(b%2 === 0) {
          x = (x*y) % c
        }
        y = (y*y) % c
        b = Number(b/2)
      }
      return x%c
    },

    encrypt(msg, q, h, g) {
      let k = this.gen_key(q)
      console.log('k', k)
      let s = this.power(h, k , g)
      console.log('s', s)
      let p = this.power(g, k, q)
      console.log('p', p)

      for(let i=0;i<msg.length;i++) {
        this.en_msg.push(msg[i])
      }

      for(let j=0;j<msg.length;j++) {
        let bb = this.en_msg[j]
        this.en_msg[j] = s * bb.charCodeAt(0)
      }

      return p
    },

    decrypt(p, key, q){
      let dr_msg = []
      let h = this.power(p, key, q)
      for(let i=0;i<this.en_msg.length;i++) {
        dr_msg.push(String.fromCharCode(Number(this.en_msg[i]/h)))
      }
      return dr_msg
    },

    start() {
      let q = 23
      let g = this.getRandomInt(2, q)
      let key = this.gen_key(q)
      let h = this.power(g, key, q)

      let p = this.encrypt(this.msg, q, h, g)
      let dr_msg = this.decrypt(p, key, q)
      let dmsg = dr_msg.join('')
      //
      console.log(dmsg)

      console.log(g, key)
    }

  },
}
</script>

<style scoped>

</style>
