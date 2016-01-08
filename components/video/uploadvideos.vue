<template>
    <input id="input-dim-1" name="inputdim1[]" type="file" multiple class="file-loading" accept="image/*">
</template>

<script type="text/babel">
    export default{
        ready(){
            $("#input-dim-1").fileinput({
                uploadUrl: "/file-upload-batch/2",
                showCancel:false,
                showRemove:false,
                allowedFileExtensions: ["jpg", "png", "gif"],
                minImageWidth: 50,
                minImageHeight: 50,
                uploadClass:'btn btn-secondary',
                removeIcon:"<i class='fa fa-trash-o text-danger'></i> &nbsp"
            });
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>