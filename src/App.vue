<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                // this is only for testing purposes no actual app will have this
                // an api call will validate user credentials
                mockAccount: {
                    username: "ameyrupji",
                    password: "P@ssword!"
                }
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>
