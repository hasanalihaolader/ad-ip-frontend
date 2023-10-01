<template>
    <div class="col-sm-12" style="margin-top: 1%;">
        <div v-show="is_success_messaged_show" class="alert alert-success">
            <strong>Success!</strong>
            {{ this.message }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessAlert',
    props: {
        message: String,
        is_success_messaged_show: Boolean
    },
    methods: {
    },
};
</script>
