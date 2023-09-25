
<template>
    <div>
        <h1>IPs</h1>
        <div class="panel panel-default">
            <div class="panel-heading text-right">
                <button type="button" class="btn btn-primary" @click="showModal">
                    <i class="fas fa-plus"></i> Add New IP
                </button>
                <form class="form-horizontal" action="/action_page.php">
                    <Modal v-show="isModalVisible" @close="closeModal">

                        <template v-slot:header>
                            ADD NEW IP
                        </template>

                        <template v-slot:body>
                            <div class="form-group">
                                <label class="control-label col-sm-4" for="ip">IP:</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="ip" placeholder="Enter Ip Address like 192.168.0.1">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-4" for="label">Label/Comment:</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="label" placeholder="Enter comment Like B2C Server">
                                </div>
                            </div>
                        </template>

                        <template v-slot:footer>
                            <button class="btn btn-primary">Save</button>
                        </template>

                    </Modal>
                </form>
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ip</th>
                            <th>Label</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jane Smith</td>
                            <td>janesmith@example.com</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bob Johnson</td>
                            <td>bob@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import modal from '../../components/Modal.vue';
export default {
    name: 'App',
    components: {
        "Modal": modal,
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>