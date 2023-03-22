<template>
    <div class="verification-page-wrapper">
        <div class="column justify-center items-center">
            <q-img src="../../assets/image/success-confirmation.jpg" width="30%"></q-img>
            <h5 class="text-weight-bold q-pa-none q-ma-none q-mt-xl">{{resMessages}}</h5>
            <p>Click <a href="/auth/login">here</a> to login</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';


export default {
    setup() {
        const route = useRoute();
        const resMessages = ref('')

        const handleConfirm = async () => {
            try {
                const { data: { messages } } = await axios.get('/auth/verification/' + route.params.token)
                resMessages.value = messages;
            } catch ({ response: { data: { messages } } }) {
                resMessages.value = messages;
            }
        }

        onMounted(async () => {
            handleConfirm();
        })

        return {
            handleConfirm, resMessages
        }
    }
}


</script>

<style scoped>

.success-img {
    width: 200px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>