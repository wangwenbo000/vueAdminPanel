<template>
    <input id="input-20" type="file" class="file-loading">
</template>

<script type="text/babel">
    export default{
        ready(){
            $("#input-20").fileinput({
                browseClass: "btn btn-primary btn-block",
                showCancel:false,
                showCaption: false,
                showRemove: false,
                showUpload: false
            });
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>