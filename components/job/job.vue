<template>
    <div class="card">
        <div class="card-header">
            公告列表
        </div>
        <div class="card-block">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" href="#home" role="tab" data-toggle="tab">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#profile" role="tab" data-toggle="tab">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#messages" role="tab" data-toggle="tab">Messages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#settings" role="tab" data-toggle="tab">Settings</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home">
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>照片</th>
                            <th>姓名</th>
                            <th>职业</th>
                            <th>排序</th>
                            <th>发布时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <th><img src="" alt="" class="img-circle"></th>
                            <td>张道飞</td>
                            <td>摄影师,摄影指导</td>
                            <td>2</td>
                            <td>2015-08-08</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        操作
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">编辑</a>
                                        <a class="dropdown-item" href="javascript:;" @click="isDelete">删除</a>
                                    </div>
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
                <div role="tabpanel" class="tab-pane" id="profile">...</div>
                <div role="tabpanel" class="tab-pane" id="messages">...</div>
                <div role="tabpanel" class="tab-pane" id="settings">...</div>
            </div>
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