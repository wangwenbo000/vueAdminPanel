<template>
    <nav class="navbar navbar-dark bg-primary navbar-fixed-top">
        <a class="navbar-brand" href="!#/">AdminPanel</a>
        <ul class="nav navbar-nav pull-right">
            <li class="nav-item active">
                <a class="nav-link" href="javascript:;">网站首页</a>
            </li>
            <li class="nav-item active">
                <div class="dropdown">
                    <a class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        快速通道
                    </a>
                    <div class="dropdown-menu quickroad" aria-labelledby="dropdownMenu1">
                        <a class="dropdown-item" href="#!/addSituation">
                            <i class="fa fa-newspaper-o"></i>
                            发布新闻
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!/addVideo">
                            <i class="fa fa-youtube-play"></i>
                            发布视频
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!/addPhotos">
                            <i class="fa fa-camera"></i>
                            上传剧照
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!/addGraphic">
                            <i class="fa fa-diamond"></i>
                            上传平面
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!/addJob">
                            <i class="fa fa-eye"></i>
                            发布职位
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script type="text/babel">

</script>

<style lang="sass?outputStyle=expanded">
.quickroad{
    min-width: auto;
}
</style>