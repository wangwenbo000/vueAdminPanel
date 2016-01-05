<template>
    <div class="card">
        <div class="card-header">
            <strong>公告列表</strong>
        </div>
        <div class="card-block">
            <form>
                <fieldset class="form-group">
                    <label for="title">项目名称</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入项目标题">
                    <small class="text-muted">项目的主标题</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">选择分类</label>
                    <div class="row">
                        <div class="col-xs-4">
                            <select class="selectpicker" id="category">
                                <option>正在做</option>
                                <option>行业动态</option>
                                <option>更新</option>
                            </select>
                        </div>
                        <div class="col-xs-2">
                            <a href="#!/addSituation" class="btn btn-secondary"><i class="fa fa-plus-circle"></i> 增加分类</a>
                        </div>
                    </div>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">上传封面图</label>
                    <a href="#!/addSituation" class="btn btn-secondary btn-block">选择文件</a>
                    <small class="text-muted">作为项目列表封面,尺寸任意,但大小不超过800Kb</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">项目描述</label>
                    <textarea id="editor" placeholder="Enter text ..." style=""></textarea>
                    <small class="text-muted">请撰写文章内容,主要描述项目的图文细节,类似博客文章</small>
                </fieldset>
                <button type="submit" class="btn btn-primary">发布新公告</button>
            </form>
        </div>
    </div>

</template>

<script type="text/babel">
    export default{
        ready(){
            tinymce.init({
                selector:'#editor',
                plugins: "image imagetools" ,
                height: 200
            });
            $('.selectpicker').selectpicker({
                style:'btn-secondary',
                size: 4
            });

        },
        beforeDestroy(){
            tinymce.remove("#editor");
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>