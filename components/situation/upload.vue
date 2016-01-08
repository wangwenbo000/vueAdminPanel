<template>
    <input id="upload_situation_cover" name="situation_cover[]" type="file" multiple class="file-loading" accept="image/*">
</template>

<script type="text/babel">
    export default{
        ready(){
            $("#upload_situation_cover").fileinput({
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