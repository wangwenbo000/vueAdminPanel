<template>
    <Topnav></Topnav>
    <div class="container">
        <div class="row">
            <div class="col-xs-3">
                <div class="card slider">
                    <div class="card-header">
                        <h5>设定选项 <small>Setting</small></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><a href="">Cras justo odio</a></li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item active">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-9">
                <router-view transition="fade" transition-mode="out-in"></router-view>
            </div>
        </div>
    </div>

</template>

<script type="text/babel">
    import Topnav from './nav/nav.vue'
    export default{
        components: {
            Topnav
        }
    }
</script>

<style lang="sass">
    @import "../bootstrap/scss/bootstrap.scss";
    .container{
        margin-top: 66px;
    }
    .slider{
        .card-header{
            border-bottom: none;
        }
    }
</style>