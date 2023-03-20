<template>
    <div class="row login-page-wrapper">
        <div class="col q-my-auto">
            <q-img src="../assets/image/helpdesk-illustration.jpg"></q-img>
        </div>
        <div class="col bg-primary login-form-wrapper">
            <div class="text-white login-form">
                <router-view></router-view>
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