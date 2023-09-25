<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <header class="modal-header bg-primary text-center f-18 f-bold" >
                    <slot name="header">
                        This is the default title!
                    </slot>
                    <button type="button" class="btn-close btn-primary" @click="close">
                        x
                    </button>
                </header>

                <section class="modal-body">
                    <slot name="body">
                        This is the default body!
                    </slot>
                </section>

                <footer class="modal-footer">
                    <slot name="footer">
                        This is the default footer!
                    </slot>
                    <button type="button" class="btn btn-danger" @click="close">
                        Close Modal
                    </button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    height: calc(100% - 60%);
    width: 50%;
}
.f-18{font-size: 18px;}
.f-bold{font-weight: bold;}
.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}
</style>
