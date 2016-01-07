<template>
    <div class="card">
        <div class="card-header">
            <strong>发布招聘信息</strong>
        </div>
        <div class="card-block">
            <form>
                <fieldset class="form-group">
                    <label for="title">职位名称</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入项目标题">
                    <small class="text-muted">项目的主标题</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="title">薪资待遇</label>
                    <input type="text" class="form-control" id="title" placeholder="薪资待遇">
                    <small class="text-muted">若不填写,网站将为默认显示为'面谈'</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="title">需求名额</label>
                    <input type="text" class="form-control" id="title" placeholder="名额数量">
                    <small class="text-muted">该岗位的需求名额</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">职位描述</label>
                    <textarea id="editor" placeholder="Enter text ..." style=""></textarea>
                    <small class="text-muted">请撰写文章内容,主要描述项目的图文细节,类似博客文章</small>
                </fieldset>
                <button type="submit" class="btn btn-primary">发布新职位</button>
            </form>
        </div>
    </div>

</template>

<script type="text/babel">
    export default{
        ready(){
            tinymce.init({
                selector: '#editor',
                plugins: "image imagetools",
                height: 300
            });
        },
        beforeDestroy(){
            tinymce.remove("#editor");
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>