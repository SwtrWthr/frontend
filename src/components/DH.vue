<template>
  <div>
    <v-container
      style="background-color: #5D6D7E;width:600px;border-radius: 10px"
      class="my-10"
    >
      <v-row
        justify="center"
        align-content="center"
        class="ma-5"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <span
            style="color: whitesmoke"
            class="text-h4 align-self-center font-weight-bold"
          >
            Diffie Hellman
          </span>
        </v-col>
        <v-row
          justify="space-around"
          style="width: 100%"
          class="mt-4"
        >
          <v-text-field
            style="max-width: 150px"
            class="mr-0"
            solo
            label="enter P"
            v-model="p"
          ></v-text-field>
          <v-text-field
            v-model="g"
            style="max-width: 150px"
            solo
            label="enter G"
          ></v-text-field>
        </v-row>
        <v-col
          md="6"
          cols="12"
          class="text-center"
        >
          <span
            style="color: whitesmoke"
            class="text-h5 font-weight-bold"
          >
            Alice
          </span>
          <v-text-field
            v-model="alice"
            :label="'Enter private key'"
            solo
            class="mt-3"
          >

          </v-text-field>
        </v-col>
        <v-col
          md="6"
          cols="12"
          class="text-center"
        >
          <span
            style="color: whitesmoke"
            class="text-h5 font-weight-bold"
          >
            Bob
          </span>
          <v-text-field
            v-model="bob"
            :label="'Enter private key'"
            solo
            class="mt-3"
          >

          </v-text-field>
        </v-col>
        <v-row
          justify="space-around"
          style="width: 100%"
          v-if="show"
        >
          <v-col cols="6" class="text-center pt-6">
            <v-img
              :src="'https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-b82eaec75fce10cc28896ef3498ead4a_l3.svg'"
            />
          </v-col>
          <v-col cols="6" class="text-center">
            <v-img
              :src="'https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-61cb4a674a830176c2f612093ea27638_l3.svg'"
            />
          </v-col>
        </v-row>
        <v-row
          style="width: 100%; color: whitesmoke; font-size: 20px"
          justify="space-around"
          v-if="show"
        >
          <span>X = {{ x }}</span>
          <span>Y = {{ y }}</span>
        </v-row>
        <v-row
          style="width: 100%; color: whitesmoke; font-size: 20px"
          justify="space-around"
          v-if="show"
        >
          <span>Y = {{ y }}</span>
          <span>X = {{ x }}</span>
        </v-row>
        <v-row
          v-if="show"
          justify="space-around"
          style="width: 100%"
        >
          <v-col cols="6" class="text-center pt-5">
            <v-img
              :src="'https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-e0b79afee2a49d05ec0e81f8ba5f6efd_l3.svg'"
            />
          </v-col>
          <v-col cols="6" class="text-center">
            <v-img
              :src="'https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-66c9c89d1b92e374fce28a7b7d64931d_l3.svg'"
            />
          </v-col>
        </v-row>
        <v-row
          v-if="show"
          style="width: 100%; color: whitesmoke; font-size: 20px"
          justify="space-around"
        >
          <span>K<sub>a</sub> = {{ ka }}</span>
          <span>K<sub>b</sub> = {{ kb }}</span>
        </v-row>
        <v-row
          justify="center"
          class="mt-10"
        >
          <v-btn
            @click="calculate"
            :disabled="!p || !g || !alice || !bob"
          >calculate</v-btn>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DH',
  data() {
    return {
      p: undefined,
      g: undefined,
      alice: undefined,
      bob: undefined,
      x: undefined,
      y: undefined,
      ka: undefined,
      kb: undefined,
      show: false,
    }
  },
  methods: {
    calculate() {
      this.x = Math.pow(this.g, this.alice)%this.p
      this.y = Math.pow(this.g, this.bob)%this.p
      this.ka = Math.pow(this.y, this.alice)%this.p
      this.kb = Math.pow(this.x, this.bob)%this.p
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>
