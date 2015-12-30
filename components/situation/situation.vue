<template>
    <div class="card">
        <div class="card-header">
            公告列表
            <button type="button" class="btn btn-primary btn-sm text-right">增加公告</button>
        </div>
        <div class="card-block">
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
                                Small button
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
                                Small button
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
                                Small button
                            </button>
                            <div class="dropdown-menu">
                                ...
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script type="text/babel">

</script>

<style lang="sass?outputStyle=expanded">

</style>