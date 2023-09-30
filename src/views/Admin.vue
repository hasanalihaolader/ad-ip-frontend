<template>
    <div class="container">
        <div class="col-sm-12">
            <nav class="navbar  navbar-expand-lg navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <router-link class="navbar-brand" to="/dashboard"><b>AD - IP Management Solution</b></router-link>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><router-link to="/dashboard/ip">IPs</router-link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link to="#"><span @click="logout">Logout</span></router-link></li>
                        <li>
                            <router-link to="/logout"><span class="text-primary"><b>Logged in by : {{ this.getLoggedInUserName() }} </b></span></router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <router-view />
        </div>
    </div>
</template>


<script>
import AuthRepository from '../Repositories/AuthRepository';

export default {
    name: 'AdminTemplate',
    data() {
        return {

        }
    },
    methods: {
        logout() {
            var token = this.$helpers.getCookie('token');
            if (token) {
                AuthRepository.logout(token).finally(response => {
                    this.$helpers.deleteCookie('token');
                    this.$router.push({ name: 'Login' });
                });
            }
        }
    }
}
</script>