<template>
    <Topnav></Topnav>
    <div class="container">
        <div class="row">
            <div class="col-xs-2">
                <Slider></Slider>
            </div>
            <div class="col-xs-10">
                <ol class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Library</a></li>
                    <li class="active">Data</li>
                </ol>
                <router-view transition="fade" transition-mode="out-in"></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Topnav from './nav/nav.vue'
    import Slider from './slider/slider.vue'
    export default{
        components: {
            Topnav,
            Slider
        }
    }
</script>

<style lang="sass">
@import "style.scss";
</style>