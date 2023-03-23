<template>
    <transition>
    <q-banner rounded v-if="alert" :class="alertClass">
        {{alertMsg}}
    </q-banner>
    </transition>
    <form action="" class="form-login" @submit.prevent="handleChangePassword">
        <h4 class="q-pa-none q-ma-none"><b>Change Password</b></h4>
        <q-input type="email" rounded outlined v-model="formData.email" placeholder="Email" bg-color="white" :error="errorInput.email ? true : undefined" :error-message="errorInput.email">
            <template v-slot:prepend>
                <q-icon name="person" color="gray" />
            </template>
        </q-input>
        <div class="row justify-between items-center q-gutter-sm">
            <span>Already have account? <router-link to="/auth/login" class="text-bold text-secondary">Click here to login.</router-link></span>
            <q-btn label="Submit" class="bg-secondary text-black btn" rounded type="submit" :loading="submitLoading"></q-btn>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    setup(){
        const formData = ref({})
        const submitLoading = ref(false)
        const alert = ref(false)
        const alertMsg = ref('')
        const alertClass = ref('')
        const errorInput = ref({})

        const handleChangePassword = async () => {
            alert.value = false;
            errorInput.value = {};
            submitLoading.value = true;
            try {
                const {data: {messages, data: {token}}} = await axios.post('/auth/change-password', formData.value)
                alertMsg.value = messages;
                alertClass.value = 'bg-positive text-white';
                alert.value = true;
                submitLoading.value = false;
                formData.value = {};
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
            handleChangePassword,
            submitLoading,
            alert,
            alertClass,
            alertMsg,
            errorInput,
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