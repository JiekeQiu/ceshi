<template>
    <div v-text='title'></div>
</template>
<script>
export default {
    data(){
        return {
            title:'今日头条'
        }
    }
}
</script>
<style scoped>
    div{
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: red;
        line-height: 50px;

    }
</style>


