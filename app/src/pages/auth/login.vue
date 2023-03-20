<template>
    <div class="row login-page-wrapper">
        <div class="col q-my-auto">
            <q-img src="../../assets/image/helpdesk-illustration.jpg"></q-img>
        </div>
        <div class="col bg-primary login-form-wrapper">
            <div class="text-white login-form">
                <h4 class="q-pa-none q-ma-none"><b>Login</b></h4>
                <q-input rounded outlined v-model="text" placeholder="Username" bg-color="white">
                    <template v-slot:prepend>
                        <q-icon name="person" color="gray" />
                    </template>
                </q-input>
                <q-input type="password" rounded outlined v-model="text" placeholder="Password" bg-color="white">
                    <template v-slot:prepend>
                        <q-icon name="visibility" color="gray" />
                    </template>
                </q-input>
                <q-checkbox v-model="remindMe" label="Remind me" color="black"/>
                <div class="row justify-end">
                    <q-btn label="Login" class="bg-white text-black btn" rounded></q-btn>
                </div>
                <p class="text-center text-h6">Forgot Password? <a href="#" class="text-white">Click here!</a></p>
                
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';

    export default {
        setup(){
            const remindMe = ref(false)

            return {remindMe}
        }
    }

</script>

<style scoped>

.login-page-wrapper {
    min-height: 100vh;
}

.login-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-form {
    width: 100%;
    padding: 0 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.login-card {
    max-width: 500px;
}

.btn {
    min-width: 100px;
}

</style>