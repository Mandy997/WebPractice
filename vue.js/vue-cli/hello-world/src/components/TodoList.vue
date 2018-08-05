<template>
    <div>
        <div>
            <input type="text" v-model="inputValue"/>
            <button @click="handleSubmit">提交</button>
        </div>
         <todo-item v-for="(item,index) of list" :key="index" :content="item" :index="index" @delete="hanleDelete"></todo-item>
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
