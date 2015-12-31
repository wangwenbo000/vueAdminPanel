<template>
    <div class="list-group">
        <!--<a href="#" name="a" class="list-group-item" @click="">控制台</a>-->
        <!--<a href="#!/situation" class="list-group-item">新闻发布</a>-->
        <!--<a href="#!/video" class="list-group-item">视频管理</a>-->
        <!--<a href="#!/graphic" class="list-group-item">平面管理</a>-->
        <a href="#!/{{s.router}}" class="list-group-item" v-for="s in slider" v-bind:class="[s.state?'active':'']" @click="sliderTab($index)">{{s.name}}</a>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return{
                slider:[
                    {name:'控制台',router:'',state:true},
                    {name:'新闻发布',router:'situation',state:false},
                    {name:'视频管理',router:'video',state:false},
                    {name:'平面管理',router:'graphic',state:false},
                    {name:'团队管理',router:'team',state:false}
                ]
            }
        },
        methods:{
            sliderTab(index){
                for (var i=0; i<this.slider.length; i++){
                    this.slider[i].state=false;
                }
                this.slider[index].state=true;
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>