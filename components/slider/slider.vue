<template>
    <!--侧边栏管理员面板-->
    <Panel></Panel>
    <!--侧边栏按钮列表-->
    <div class="list-group">
        <a href="#" name="a" class="list-group-item"
           :class="[$route.name=='Index'?'active':'']">
            <i class="fa fa-tachometer"></i> 控制台
        </a>
        <a href="#!/situation" class="list-group-item"
           :class="[$route.name=='situation'?'active':'']">
            <i class="fa fa-newspaper-o"></i> 新闻发布
        </a>
        <a href="#!/video" class="list-group-item"
           :class="[$route.name=='video'?'active':'']">
            <i class="fa fa-youtube-play"></i> 视频管理
        </a>

        <a href="#!/photos" class="list-group-item"
           :class="[$route.name=='photos'?'active':'']">
            <i class="fa fa-camera"></i> 项目剧照
        </a>
        <a href="#!/graphic" class="list-group-item"
           :class="[$route.name=='graphic'?'active':'']">
            <i class="fa fa-diamond"></i> 平面管理
        </a>
        <a href="#!/team" class="list-group-item"
           :class="[$route.name=='team'?'active':'']">
            <i class="fa fa-users"></i> 团队管理
        </a>
        <a href="#!/job" class="list-group-item"
           :class="[$route.name=='job'?'active':'']">
            <i class="fa fa-eye"></i> 人才招聘
            <span class="label label-pill label-danger pull-right">2</span>
        </a>
        <a href="javascript:;" class="list-group-item"
           :class="[$route.name=='opensource'?'active':'']" data-toggle="modal" data-target="#myModal">
            <i class="fa fa-github-alt"></i> 开源库
        </a>
    </div>
    <Opensource></Opensource>
</template>

<script type="text/babel">
    import Panel from './panel.vue'
    import Opensource from './opensource.vue'
    export default{
        components: {
            Panel,
            Opensource
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>