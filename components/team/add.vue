<template>
    <div class="card">
        <div class="card-header">
            <strong>公告列表</strong>
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
                            <select class="selectpicker" id="category">
                                <option>摄影师</option>
                                <option>摄影指导</option>
                                <option>电影美术</option>
                            </select>
                        </div>
                        <div class="col-xs-2">
                            <a href="#!/addSituation" class="btn btn-secondary"><i class="fa fa-plus-circle"></i> 增加分类</a>
                        </div>
                    </div>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">上传照片</label>
                    <a href="#!/addSituation" class="btn btn-secondary btn-block">选择文件</a>
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
            $('.selectpicker').selectpicker({
                style:'btn-secondary',
                size: 4
            });

        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>