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
            v-model="text"
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
              <v-select
                v-model="cipher"
                :items="ciphers"
                :menu-props="{ top: false, offsetY: true }"
                label="Label"
                item-text="name"
                item-value="id"
                solo
                background-color="gray"
              ></v-select>
              <v-text-field
                solo
                v-model="key"
                background-color="gray"
              >

              </v-text-field>
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
                @click="encrypt"
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
  name: 'Sec',
  data() {
    return {
      ciphers: [
        {
          id: 0,
          name: 'Caesar'
        },
        {
          id: 1,
          name: 'Vigenere'
        },
        {
          id: 2,
          name: 'Transposition'
        }
      ],
      key: undefined,
      text: undefined,
      cipher: undefined,
      dText: undefined,
      ed: 0,
      alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' ']
    }
  },

  methods: {
    encTrans() {
      let new_text = []
      for(let i=0;i<this.key;i++) {
        let arr = []
        for(let j=0;j<this.text.length;j++) {
          if(j%this.key===i) {
            arr.push(this.text[j])
          }
        }
        new_text.push(arr)
      }
      let new_new_text = new_text.sort( () => .5 - Math.random() );
      let new_new_new_text = new_new_text.join('')
      this.dText = new_new_new_text.replace(/,/g, '')
      console.log(new_new_new_text.replace(/,/g, ''))
    },
    encryptVigenere() {
      this.key = this.key.toUpperCase()
      this.text = this.text.toUpperCase()
      let new_key = []
      for(let i=0;i<this.text.length;i++) {
        new_key.push(this.key[i%this.key.length])
      }
      console.log(new_key)
      let new_text = []
      for(let j=0;j<this.text.length;j++) {
        console.log()
        new_text.push(this.alphabet[(this.alphabet.indexOf(new_key[j]) + this.alphabet.indexOf(this.text[j]))%26])
      }
      return new_text
    },

    decryptVigenere() {
      this.key = this.key.toUpperCase()
      this.text = this.text.toUpperCase()
      let new_key = []
      for(let i=0;i<this.text.length;i++) {
        new_key.push(this.key[i%this.key.length])
      }
      let new_text = []
      for(let j=0;j<this.text.length;j++) {
        console.log((this.alphabet.indexOf(this.text[j]) - (this.alphabet.indexOf(new_key[j])+26)%26))
        new_text.push(this.alphabet[(((this.alphabet.indexOf(this.text[j]) - this.alphabet.indexOf(new_key[j]))+26)%26)])
      }
      return new_text
    },

    findIdx(letter) {
      let key = Number(this.key)
      let lIdx = this.alphabet.indexOf(letter)
      console.log('lIdx', letter ,lIdx)
      if(this.ed>0) {
        if(lIdx !== 26) {
          if(key > lIdx) {
            return 26 - (key-lIdx)
          } else {
            return lIdx - key
          }
        } else {
          console.log('yea')
          return 26
        }
      } else {
        if(lIdx !== 26) {
          if((lIdx + key) > 25) {
            return (lIdx + key) - 26
          } else {
            return lIdx + key
          }
        } else {
          console.log('yea')
          return 26
        }
      }
    },

    encrypt() {
      switch (this.cipher) {
        case 0:
          let vm = this
          let new_arr = this.text.toUpperCase().split('').map(l => {
            return vm.alphabet[vm.findIdx(l)]
          })
          this.dText = new_arr.join('')
          break
        case 1:
          // let vm1 = this
          // let new_arr1 = this.text.toUpperCase().split('').map(l => {
          //   return vm1.alphabet[vm1.findIdx(l)]
          // })
          // this.dText = new_arr1.join('')
          if(this.ed < 1)
            return this.dText = this.encryptVigenere().join('')
          else
            return this.dText = this.decryptVigenere().join('')
        case 2:
          return this.encTrans()
      }
    },

  }
}
</script>

<style scoped>

</style>
