<template>
    <div class="card">
        <div class="card-header">
            公告列表
        </div>
        <div class="card-block">
            <a href="#!/addSituation" class="btn btn-primary btn-sm text-right">增加公告</a>
            <div class="dropdown-divider"></div>
            <table class="table table-striped table-hover">
                <thead class="thead-default">
                <tr>
                    <th>#</th>
                    <th>新闻标题</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>政治局召开民主生活会 习近平讲话</td>
                    <td>2015-08-08</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                操作
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">删除</a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>万科只是开始 保险公司的下一个目标是谁(危险名单)</td>
                    <td>2015-12-12</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                操作
                            </button>
                            <div class="dropdown-menu">
                                ...
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>湖南“吸毒市长”被逮捕 曾与毒友长期保持性关系</td>
                    <td>2015-10-08</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                操作
                            </button>
                            <div class="dropdown-menu">
                                操作
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
    </div>

</template>

<script type="text/babel">

</script>

<style lang="sass?outputStyle=expanded">

</style>