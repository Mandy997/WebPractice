<template>
    <div>
        <div>
            <input type="text" v-model="inputValue"/>
            <button @click="handleSubmit">提交</button>
        </div>
        <ul>
           
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
            inputValue:'',
            list:[]
        }
    },
    methods:{
        handleSubmit(){
            this.list.push(this.inputValue);
            this.inputValue='';
        }
    }
}
</script>

<style>
</style>
