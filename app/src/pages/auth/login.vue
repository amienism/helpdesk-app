<template>
    <transition>
    <q-banner rounded v-if="alert" :class="alertClass">
        {{alertMsg}}
    </q-banner>
    </transition>
    <form action="" class="form-login" @submit.prevent="handleLogin">
        <h4 class="q-pa-none q-ma-none"><b>Login</b></h4>
        <q-input type="email" rounded outlined v-model="formData.email" placeholder="Email" bg-color="white" :error="errorInput.email ? true : undefined" :error-message="errorInput.email">
            <template v-slot:prepend>
                <q-icon name="person" color="gray" />
            </template>
        </q-input>
        <q-input type="password" rounded outlined v-model="formData.password" placeholder="Password" bg-color="white" :error="errorInput.password ? true : undefined" :error-message="errorInput.password">
            <template v-slot:prepend>
                <q-icon name="visibility" color="gray" />
            </template>
        </q-input>
        
        <q-checkbox v-model="remindMe" label="Remind me" color="black" />
        <div class="row justify-end q-gutter-sm">
            <q-btn label="Register" class="bg-white text-black btn" rounded to="/auth/register"></q-btn>
            <q-btn label="Login" class="bg-secondary text-black btn" rounded type="submit" :loading="submitLoading"></q-btn>
        </div>
    </form>
    <p class="text-center text-body">Forget Password? <router-link to="/auth/forget-password" class="text-positive text-weight-bold">Click here!</router-link></p>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup(){
        const router = useRouter();

        const formData = ref({})
        const submitLoading = ref(false)
        const alert = ref(false)
        const alertMsg = ref('')
        const alertClass = ref('')
        const errorInput = ref({})
        const remindMe = ref(false)

        const handleLogin = async () => {
            alert.value = false;
            errorInput.value = {};
            submitLoading.value = true;
            try {
                const {data: {messages, data: {token}}} = await axios.post('/auth/login', formData.value)
                localStorage.setItem("jwt_token", token)
                alertMsg.value = messages;
                alertClass.value = 'bg-positive text-white';
                alert.value = true;
                submitLoading.value = false;
                router.push('/app/home')
            } catch ({response: {data: {messages, data}}}) {
                errorInput.value = data;
                alertMsg.value = messages;
                alertClass.value = 'bg-negative text-white';
                alert.value = true;
                submitLoading.value = false;
            }
        }

        return {
            formData,
            handleLogin,
            submitLoading,
            alert,
            alertClass,
            alertMsg,
            errorInput,
            remindMe
        }
    }
}

</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

.form-login {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>