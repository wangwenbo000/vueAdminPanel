<template>
    <div class="card">
        <div class="card-header">
            <strong>剧照专题列表</strong>
        </div>
        <div class="card-block">
            <a href="#!/addPhotos" class="btn btn-primary btn-sm text-right"><i class="fa fa-plus-circle"></i>  增加剧照专题</a>
            <div class="dropdown-divider"></div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>新闻标题</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">3</th>
                    <td>湖南“吸毒市长”被逮捕 曾与毒友长期保持性关系</td>
                    <td>2015-10-08</td>
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