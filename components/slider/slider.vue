<template>
    <div class="list-group">
        <a href="#" name="a" class="list-group-item" @click="">控制台</a>
        <a href="#!/situation" class="list-group-item">新闻发布</a>
        <a href="#!/video" class="list-group-item">视频管理</a>
        <a href="#!/graphic" class="list-group-item">平面管理</a>
        <a href="#!/team" class="list-group-item">团队管理</a>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return{
                active:'active'
            }
        },
        methods:{
            sliderTab(event,name){
                return event.target.name==name;
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>