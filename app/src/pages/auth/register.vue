<template>
    <transition>
    <q-banner rounded v-if="alert" :class="alertClass">
        {{alertMsg}}
    </q-banner>
    </transition>
    <form action="" class="form-register" @submit.prevent="handleRegister">

        <h4 class="q-pa-none q-ma-none"><b>Register</b></h4>
        <q-input rounded outlined v-model="formData.name" placeholder="Name" bg-color="white" :error="errorInput.name ? true : undefined" :error-message="errorInput.name">
            <template v-slot:prepend>
                <q-icon name="person" color="gray" />
            </template>
        </q-input>
        <q-input rounded outlined v-model="formData.email" placeholder="Email" bg-color="white" :error="errorInput.email ? true : undefined" :error-message="errorInput.email">
            <template v-slot:prepend>
                <q-icon name="alternate_email" color="gray" />
            </template>
        </q-input>
        <q-input type="password" rounded outlined v-model="formData.password" placeholder="Password" bg-color="white" :error="errorInput.password ? true : undefined" :error-message="errorInput.password">
            <template v-slot:prepend>
                <q-icon name="visibility" color="gray" />
            </template>
        </q-input>
        <q-input type="password" rounded outlined v-model="formData.confirm_password" placeholder="Confirm Password" :error="errorInput.confirm_password ? true : undefined" :error-message="errorInput.confirm_password"
            bg-color="white">
            <template v-slot:prepend>
                <q-icon name="visibility" color="gray" />
            </template>
        </q-input>
        <div class="row justify-between items-center q-gutter-sm">
            <span>Already have account? <router-link to="/auth/login" class="text-bold text-secondary">Click here to login.</router-link></span>
            <q-btn label="Register" class="bg-secondary text-black btn" :loading="submitLoading" rounded type="submit"></q-btn>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import { ref, computed } from 'vue';

export default {
    setup() {
        const formData = ref({})
        const errorInput = ref({})
        const alert = ref(false)
        const alertMsg = ref('')
        const alertClass = ref('')
        const submitLoading = ref(false)
        
        const handleRegister = async () => {
            alert.value = false;
            errorInput.value = {}
            submitLoading.value = true;
            try {
                const { data: {messages} } = await axios.post('/auth/register', formData.value)
                formData.value = {};
                alertMsg.value = messages;
                alertClass.value = 'bg-positive text-white'
                alert.value = true;
                submitLoading.value = false;
            } catch ({ response: { data: { data, messages } } }) {
                errorInput.value = data;
                alertClass.value = 'bg-negative text-white'
                alertMsg.value = messages;
                alert.value = true;
                submitLoading.value = false;
            }
        }

        return {
            formData, handleRegister, alert, alertMsg, errorInput, submitLoading, alertClass
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: underline;
    color: white;
}

.form-register {
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