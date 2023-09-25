<template>
    <div class="container">
        <div class="col-sm-12">
            <nav class="navbar  navbar-expand-lg navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#"><b>AD - IP Management Solution</b></a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><router-link to="/dashboard/ip">IPs</router-link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link to="/logout">Logout</router-link></li>
                        <li>
                            <router-link to="/logout"><span class="text-primary"><b>Logged in by : MR HASAN</b></span></router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>