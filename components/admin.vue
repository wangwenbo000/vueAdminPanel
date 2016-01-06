<template>
    <Topnav></Topnav>
    <div class="container">
        <div class="row">
            <div class="col-xs-2">
                <Slider></Slider>
            </div>
            <div class="col-xs-10">
                <router-view transition="fade" transition-mode="out-in"></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Topnav from './nav/nav.vue'
    import Slider from './slider/slider.vue'
    var stack_bar_top = {"dir1":"down", "dir2":"right", "push":"top"};
    function show_stack_bar_top(type) {
        var opts = {
            title: "Over Here",
            text: "Check me out. I'm in a different stack.",
            addclass: "stack-bar-top",
            cornerclass: "",
            width: "100%",
            stack: stack_bar_top
        };
        switch (type) {
            case 'error':
                opts.title = "Oh No";
                opts.text = "Watch out for that water tower!";
                opts.type = "error";
                break;
            case 'info':
                opts.title = "Breaking News";
                opts.text = "Have you met Ted?";
                opts.type = "info";
                break;
            case 'success':
                opts.title = "Good News Everyone";
                opts.text = "I've invented a device that bites shiny metal asses.";
                opts.type = "success";
                break;
        }
        new PNotify(opts);
    }
    export default{
        ready(){
            show_stack_bar_top("success");
        },
        components: {
            Topnav,
            Slider
        }
    }
</script>

<style lang="sass">
@import "style.scss";
@import "style.scss";
.fade-transition {
    transition: opacity .3s ease;
}

.fade-enter, .fade-leave {
    opacity: 0;
}
</style>