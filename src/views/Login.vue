<template>
    <div class="container">
        <div class="col-sm-12">
            <center><b>Welcome to IP Management solution</b></center>
        </div>
        <div class="col-sm-12" style="margin-top: 10%;">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <b>
                            <center>Login</center>
                        </b>
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="validateBeforeSubmit">
                            <div v-show="login_failed_error" class="alert alert-danger" role="alert">
                                {{ login_failed_message }}
                            </div>
                            <div class="form-group" :class="{ 'has-error': errors.has('email') }">
                                <label for="email">Email address</label>
                                <input type="email" v-validate="'required|email'" class="form-control email" id="email"
                                    aria-describedby="emailHelp" placeholder="Enter email" name="email"
                                    v-model="input.email">
                                <small id="emailHelp" class="form-text text-danger" v-show="errors.has('email')">{{
                                    errors.first('email') }}</small>
                            </div>


                            <div class="form-group" :class="{ 'has-error': errors.has('password') }">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" v-validate="'required'" class="form-control" id="password"
                                    name="password" v-model="input.password" placeholder="Password">
                                <small id="emailHelp" class="form-text text-danger" v-show="errors.has('email')">{{
                                    errors.first('password') }}</small>
                            </div>

                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</template>

<script>
import AuthRepository from "../Repositories/AuthRepository";
export default {
    name: 'Login',
    data() {
        return {
            input: {
                email: "",
                password: ""
            },
            login_failed_message: "",
            login_failed_error: false
        }
    },
    methods: {
        resetProperty(){
            this.login_failed_message = '';
            this.login_failed_error = false;
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then((validate) => {
                if (validate) {
                    this.login_failed_message = '';
                    AuthRepository.getToken(this.input).then(response => {
                        this.resetProperty();
                        let response_body = response.data;
                        if(response.status == 200 & response_body.status && (response_body.data.access_token))
                        {
                            this.$router.push({ name: 'Dashboard' });
                        }
                        this.login_failed_message = 'Have some issue on login, please try again after some time';
                        this.login_failed_error = true;
                    }).catch(error => {
                        let response_body = error.response.data;
                        if(error.response.status == 401)
                        {
                            this.login_failed_message = 'Email or Password not matched';
                            this.login_failed_error = true;
                        }
                    });
                    return;
                }

                alert('Correct them errors!');
            });
        }
    }
}
</script>