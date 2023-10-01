
<template>
    <div>
        <h1>IPs</h1>
        <div class="panel panel-default">
            <div class="col-sm-12 panel-heading text-right">
                <div>
                    <div class="col-sm-6" style="display: flex;padding-left: 0px;">

                    </div>
                    <div class="col-sm-6" style="padding-right: 0px;">
                        <button type="button" class="btn btn-primary" @click="create">
                            <i class="fas fa-plus"></i> Add New IP
                        </button>
                    </div>
                </div>

                <form class="form-horizontal" @submit.prevent="createOrUpdate">
                    <Modal v-show="this.is_modal_visible" @close="closeModal">
                        <template v-slot:header>
                            {{ verb }} NEW IP
                        </template>
                        <template v-slot:body>
                            <div class="form-group" :class="{ 'has-error': errors.has('ip') }">
                                <label class="control-label col-sm-4" for="ip">IP:</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="ip" name="ip" v-model="input.ip"
                                        v-validate="'required|ip'" placeholder="Enter Ip Address like 192.168.0.1">
                                    <small id="ipHelp" class="form-text text-danger" v-show="errors.has('ip')">{{
                                        errors.first('ip') }}</small>
                                </div>
                            </div>
                            <div class="form-group" :class="{ 'has-error': errors.has('label') }">
                                <label class="control-label col-sm-4" for="label">Label/Comment:</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="label" name="label" v-model="input.label"
                                        v-validate="'required|max:255'" placeholder="Enter comment Like B2C Server">
                                    <small id="labelHelp" class="form-text text-danger" v-show="errors.has('label')">{{
                                        errors.first('label') }}</small>
                                </div>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <button class="btn btn-primary">{{ verb }}</button>
                        </template>
                    </Modal>
                </form>

            </div>
            <div class="panel-body">

                <FailAlert :message=failed_message :is_failed_messaged_show=this.is_failed_messaged_show></FailAlert>
                <SuccessAlert :message=success_message :is_success_messaged_show=this.is_success_messaged_show>
                </SuccessAlert>


                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ip</th>
                            <th>Label</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ip, index in ips">
                            <td>{{ ++index }}</td>
                            <td>{{ ip.ip }}</td>
                            <td>{{ ip.label }}</td>
                            <td>
                                <button class="btn btn-warning" @click="edit(ip.id)">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import IpRepository from '../../Repositories/IpRepository';
import modal from '../../components/Modal.vue';
import fail_alert from '../../components/FailAlert.vue';
import success_alert from '../../components/SuccessAlert.vue';

export default {
    name: 'Ip',
    components: {
        "Modal": modal,
        "FailAlert": fail_alert,
        "SuccessAlert": success_alert,
    },
    data() {
        return {
            ips: {},
            failed_message: '',
            success_message: '',
            is_failed_messaged_show: false,
            is_success_messaged_show: false,
            verb: '',
            input: {
                ip: '',
                label: ''
            },
            updatable_id: ''
        };
    },
    mounted: function () {
        this.verb = 'add'
        this.getIps();
    },
    methods: {
        getIps() {
            IpRepository.fetch().then(response => {
                this.ips = this.formatSuccessResponseData(response);
            }).catch(error => {
                this.failed_message = this.formatErrorResponse(error);
                this.is_failed_messaged_show = true;
            });
        },
        resetModalValue() {
            this.input = {
                ip: '',
                label: ''
            }
            this.$validator.reset();
        },
        create() {
            this.verb = 'add';
            this.resetModalValue();
            this.showModal();
        },

        errorHandle() {
            this.failed_message = 'Any system incident ongoing, please contact your tech administrator';
            this.is_failed_messaged_show = true;
            this.closeModal();
            this.resetModalValue();
        },

        edit(id) {
            this.verb = 'update';
            if (id) {
                IpRepository.getById(id).then(response => {
                    let formatted_response = this.formatSuccessResponseData(response);
                    this.input = formatted_response;
                    this.showModal();
                    this.updatable_id = formatted_response.id

                }).catch(error => {
                    this.errorHandle();
                });
            }
        },
        createOrUpdate() {
            this.$validator.validateAll().then((validate) => {
                if (validate) {
                    IpRepository.createOrUpdate(this.input, this.verb, this.updatable_id).then(response => {
                        if (response.status == 200) {
                            this.closeModal();
                            this.resetModalValue();
                            this.getIps();
                            this.success_message = response.data.message;
                            this.is_success_messaged_show = true;
                        }
                    }).catch(error => {
                        if (error.response) {
                            this.$setErrorsFromResponse(error.response.data.data);
                        }
                        else {
                            this.errorHandle();
                        }
                    });
                }
            });
        }
    }
};
</script>