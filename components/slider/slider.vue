<template>
    <div class="card">
        <img class="card-img-top" data-src="img/admintop.jpg" src="../img/admintop.jpg" style="width:100%" alt="Card image cap">
        <div class="card-block">
            <h3 class="card-title">咔花叔叔</h3>
            <p class="card-text">上次:2015-09-09</p>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary btn-sm">改密码</button>
                <button type="button" class="btn btn-secondary btn-sm">退出</button>
            </div>
        </div>
    </div>
    <div class="list-group">
        <a href="#" name="a" class="list-group-item" v-bind:class="[$route.name=='Index'?'active':'']"><i class="fa fa-tachometer"></i> 控制台</a>
        <a href="#!/situation" class="list-group-item" v-bind:class="[$route.name=='situation'?'active':'']"><i class="fa fa-newspaper-o"></i> 新闻发布</a>
        <a href="#!/video" class="list-group-item" v-bind:class="[$route.name=='video'?'active':'']"><i class="fa fa-youtube-play"></i> 视频管理</a>
        <a href="#!/photo" class="list-group-item" v-bind:class="[$route.name=='photo'?'active':'']"><i class="fa fa-camera"></i> 项目剧照</a>
        <a href="#!/graphic" class="list-group-item" v-bind:class="[$route.name=='graphic'?'active':'']"><i class="fa fa-diamond"></i> 平面管理</a>
        <a href="#!/team" class="list-group-item" v-bind:class="[$route.name=='team'?'active':'']"><i class="fa fa-users"></i> 团队管理</a>
        <a href="#!/job" class="list-group-item" v-bind:class="[$route.name=='job'?'active':'']">
            <i class="fa fa-eye"></i> 人才招聘
            <span class="label label-pill label-danger pull-right">2</span>
        </a>
        <a href="#!/opensource" class="list-group-item" v-bind:class="[$route.name=='opensource'?'active':'']"><i class="fa fa-github-alt"></i> 开源库</a>
    </div>
</template>

<script type="text/babel">
    export default{}
</script>

<style lang="sass?outputStyle=expanded">

</style>