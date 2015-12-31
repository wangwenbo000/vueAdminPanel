<template>
    <div class="card">
        <div class="card-header">
            <strong>公告列表</strong>
        </div>
        <div class="card-block">
            <form>
                <fieldset class="form-group">
                    <label for="title">标题</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入文章大标题">
                    <small class="text-muted">这个标题是显示在公告页面首页的</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">选择分类</label>
                    <a href="#!/addSituation" class="btn btn-primary btn-sm">增加分类</a>
                    <select class="form-control" id="category">
                        <option>正在做</option>
                        <option>行业动态</option>
                        <option>更新</option>
                    </select>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group">
                    <div id="editor"></div>
                </fieldset>
                <button type="submit" class="btn btn-primary">发布新公告</button>
            </form>
        </div>
    </div>

</template>

<script type="text/babel">
    export default{
        ready(){
            $('#editor').wysiwyg();
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>