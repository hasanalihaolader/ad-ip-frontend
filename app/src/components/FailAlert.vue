<template>
    <div class="col-sm-12" style="margin-top: 1%;">
        <div v-show="is_failed_messaged_show" class="alert alert-danger">
            <strong>Sorry!</strong>
            {{ this.message }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FailAlert',
    props: {
        message: String,
        is_failed_messaged_show: Boolean
    },
    methods: {
    },
};
</script>
