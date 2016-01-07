<template>
    <div class="card">
        <div class="card-header">
            <strong>增加团队人员</strong>
        </div>
        <div class="card-block">
            <form>
                <fieldset class="form-group">
                    <label for="title">姓名</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入团队人员姓名">
                    <small class="text-muted">请输入团队人员姓名</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="title">位置排序</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入排序序号">
                    <small class="text-muted">按照倒序排列,请按照需求调整人员位置</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">职业标签</label>
                    <div class="row">
                        <div class="col-xs-4">
                            <select class="c-select">
                                <option>摄影师</option>
                                <option>摄影指导</option>
                                <option>电影美术</option>
                            </select>
                        </div>
                        <div class="col-xs-4">
                            <div class="input-group">
                                <input type="text" class="form-control" id="exampleInputAmount" placeholder="添加新分类">
                                <a class="input-group-addon btn btn-primary">增加分类</a>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group uploadForm">
                    <label for="category">上传照片</label>
                    <input id="input-dim-1" name="inputdim1[]" type="file" multiple class="file-loading" accept="image/*">
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <button type="submit" class="btn btn-primary">添加新成员</button>
            </form>
        </div>
    </div>

</template>

<script type="text/babel">
    export default{
        ready(){
            $("#input-dim-1").fileinput({
                uploadUrl: "/file-upload-batch/2",
                showCancel:false,
                showRemove:false,
                allowedFileExtensions: ["jpg", "png", "gif"],
                minImageWidth: 50,
                minImageHeight: 50,
                uploadClass:'btn btn-secondary',
                removeIcon:"<i class='fa fa-trash-o text-danger'></i> &nbsp"
            });
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>