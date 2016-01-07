<template>
    <div class="card">
        <div class="card-header">
            公告列表
        </div>
        <div class="card-block">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" href="#home" role="tab" data-toggle="tab">招聘职位</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#profile" role="tab" data-toggle="tab">应聘反馈 &nbsp;<span class="label label-pill label-danger pull-right">2</span></a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel " class="tab-pane active p-t-md" id="home">
                    <a href="#!/addJob" class="btn btn-primary btn-sm text-right"><i class="fa fa-plus-circle"></i> 增加招聘需求</a>
                    <div class="dropdown-divider"></div>
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>职业</th>
                            <th>名额</th>
                            <th>薪资待遇</th>
                            <th>发布时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>摄影师,摄影指导</td>
                            <td>2</td>
                            <td>20000</td>
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
                <div role="tabpanel" class="tab-pane p-t-md" id="profile">
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>姓名</th>
                            <th>手机号码</th>
                            <th>电邮</th>
                            <th>应聘职业</th>
                            <th>提交时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>张道飞</td>
                            <td><h5>15117909848</h5></td>
                            <td>wangwenbo000@me.com</td>
                            <td>摄影师,摄影指导</td>
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
        </div>
    </div>
</template>

<script type="text/babel">
    export default{
        ready(){
            $('.nav-tabs a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            })
        },
        methods:{
            isDelete(id){
                window.confirm("确定要删除这条记录么?");
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
    .p-t-md { padding-top: 10px; }
</style>