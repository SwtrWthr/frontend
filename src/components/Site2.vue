<template>
    <div>
        <div class="tables">
            <div class="div1">
                <span>H1</span><input v-model="h1" type="text">
                <span>H2</span><input v-model="h2" type="text">
                <span>T1</span><input v-model="t1" type="text">
                <span>T2</span><input v-model="t2" type="text">
                <span>T3</span><input v-model="t3" type="text">
            </div>
            <div class="div2">
                <h2>EAT</h2>
                <!-- <p>T<sub>s</sub>=(T<sub>1</sub> * H<sub>1</sub>) + (1 - H<sub>1</sub>) * ((T<sub>1</sub> + T<sub>2</sub>)</p> -->
                <button @click="isActive = !isActive" v-if="!isActive">DON'T PRESS</button>
                <p v-if="isActive && t3==0">T<sub>s</sub> = ({{h1}}*{{t1}}) + (1-{{h1}})*(({{t1}}+{{t2}})*{{h2}}) = {{getEAT}}ns</p>
                <p v-if="isActive && t3!=0">T<sub>s</sub> = ({{h1}}*{{t1}}) + (1-{{h1}})*(({{t1}}+{{t2}})*{{h2}} + ({{t1}}+{{t2}}+{{t3}})*(1-{{h2}})) = {{getEAT}}ns</p>
                <!-- <p>ts = t1 * h1 + (1-h1)*((t1+t2) * h2 + (t1+t2+t3) * (1-h2))</p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            h1: '',
            h2: '',
            t1: '',
            t2: '',
            t3: ''
        }
    },
    computed: {
        getEAT : function() {
            let vm = this
            if(vm.h1 && vm.h2 && vm.t1 && vm.t2 && vm.t3) {
                vm.h1 = parseFloat(vm.h1)
                vm.h2 = parseFloat(vm.h2)
                vm.t1 = parseInt(vm.t1)
                vm.t2 = parseInt(vm.t2)
                vm.t3 = parseInt(vm.t3)
                return Math.round((vm.h1 * vm.t1) + (1 - vm.h1) * ((vm.t1 + vm.t2) * vm.h2 + (vm.t1 + vm.t2 + vm.t3) * (1 - vm.h2)))
            } else if(vm.h1 && vm.h2 && vm.t1 && vm.t2 && vm.t3 === 0) {
                vm.h1 = parseFloat(vm.h1)
                vm.h2 = parseFloat(vm.h2)
                vm.t1 = parseInt(vm.t1)
                vm.t2 = parseInt(vm.t2)
                vm.t3 = parseInt(vm.t3)
                return Math.round((vm.h1 * vm.t1) + (1 - vm.h1) * ((vm.t1 + vm.t2) * vm.h2))
            } 
            else {
                return ' '
            }
        }
    }
}
</script>

<style scoped>
header {
    height: 100%;
}
.tables {
    margin: 60px 70px 70px 70px;
    display: grid;
    grid-template-columns: 200px 700px;
    column-gap: 10px;
}

.tables input {
    float: right;
    margin: 6px;
    border: 2px solid transparent;
    background-color: rgb(216, 216, 216);
}

.tables input:focus {
    outline: none;
}

.tables span {
    float: left;
    margin: 12px 0 10px 7px;
    font-size: 11px;
    font-weight: bold;
}

.div1 {
    border: 1px solid;
}
.div2 {
    border: 1px solid;
    text-align: center;
}
.div2 h2{
    margin: 5px 0 0 0;
}

.div2 p {
    margin-top: 55px;
}
.div2 button {
    background-color: red;
    width: 120px;
    height: 60px;
    border: 0;
    margin: 28px 0 0 0;
    font-weight: bold;
    font-size: 16px;
}
.div2 button:active {
    background-color: rgb(240, 123, 123);
    outline: none;
}
.div2 button:focus {
    outline: none;
}
nav {
    display: block;
}
</style>

