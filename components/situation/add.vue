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
                    <div class="row">
                        <div class="col-xs-2">
                            <select class="c-select">
                                <option>正在做</option>
                                <option>行业动态</option>
                                <option>更新</option>
                            </select>
                        </div>
                        <div class="col-xs-4 form-group">
                            <div class="input-group">
                                <input type="text" class="form-control" id="exampleInputAmount" placeholder="添加新分类">
                                <a class="input-group-addon btn btn-primary">增加分类</a>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group uploadForm" >
                    <label for="category">上传封面图</label>
                    <Uploadcover></Uploadcover>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">撰写文章内容</label>
                    <textarea id="editor" placeholder="Enter text ..." style=""></textarea>
                    <small class="text-muted">请撰写文章内容,请不要再编辑器内使用代码,保证板式正确</small>
                </fieldset>
                <fieldset class="form-group">
                    <input type="checkbox">
                    <small class="text-muted">该篇文章不显示在首页,(可以修改,但首页显示最新5篇文章超过5篇首页可能不显示)</small>
                </fieldset>
                <button type="submit" class="btn btn-primary">发布新公告</button>
            </form>
        </div>
    </div>

</template>

<script type="text/babel">
    import Uploadcover from './upload.vue'
    export default{
        ready(){
            tinymce.init({
                selector: '#editor',
                plugins: "image imagetools",
                height: 360
            });
        },
        beforeDestroy(){
            tinymce.remove("#editor");
        },
        components:{
            Uploadcover
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>