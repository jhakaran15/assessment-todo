<template>

    <body>
        <h4 class="text-center mt-4"> Table-Data!
        </h4>
        <div class="container mt-4" id="app">
            <table class="table table-bordered table-striped table-hover">
                <thead style="position: sticky; top: 0" class="thead-dark">
                    <tr>
                        <th class="header" scope="col">ID</th>
                        <th class="header" scope="col">API</th>
                        <th class="header" scope="col">Description</th>
                        <th class="header" scope="col">Auth</th>
                        <th class="header" scope="col">HTTPS</th>
                        <th class="header" scope="col">Cors</th>
                        <th class="header" scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="detail, index in entries" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ detail.API }}</td>
                        <td>{{ detail.Description }}</td>
                        <td>{{ detail.Auth }}</td>
                        <td>{{ detail.HTTPS }}</td>
                        <td>{{ detail.Cors }}</td>
                        <td>{{ detail.Category }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            entries: [],
        };
    },
    mounted() {
        axios.get('https://api.publicapis.org/entries')
            .then(response => {
                this.entries = response.data.entries;
                console.log("GET_API_Data ", response);
                console.log("GET_Entries_Data ", response.data.entries);
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style scoped lang="scss">
.container {
    width: 1100px;
    height: 450px;
    overflow: auto;
}

.header {
    position: sticky;
    top: 0;
    text-align: center;
}
</style>

