<template>
    <div class="card">
        <div class="card-header">
            视频列表 <small class="text-muted">视频托管服务商为爱奇艺视频</small>
        </div>
        <div class="card-block">
            <a href="#!/addVideo" class="btn btn-primary btn-sm text-right"><i class="fa fa-cloud-upload"></i>上传视频</a>
            <div class="dropdown-divider"></div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>预览</th>
                    <th>视频标题</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><img src="" alt=""></td>
                    <td>政治局召开民主生活会 习近平讲话</td>
                    <td>2015-08-08</td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group" aria-label="...">
                            <button type="button" class="btn btn-secondary"><i class="fa fa-pencil-square-o"></i></button>
                            <button type="button" class="btn btn-secondary" @click="isDelete"><i class="fa fa-trash-o text-danger"></i></button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <nav>
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script type="text/babel">
    export default{
        methods:{
            isDelete(id){
                window.confirm("确定要删除这条记录么?");
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>