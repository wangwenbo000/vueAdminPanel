<template>
    <Statistics></Statistics>
    <div class="card">
        <div class="card-header">
            控制台通告
        </div>
        <div class="card-block">
            <table class="table table-striped table-hover">
                <thead class="thead-default">
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="text/babel">
    import Statistics from './statistics.vue'
    export default{
        components: {
            Statistics
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>