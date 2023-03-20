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
                <div class="row justify-end">
                    <q-btn label="Login" class="bg-white text-black" rounded></q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.login-page-wrapper {
    min-height: 100vh;
}

.login-form-wrapper {
    display: flex;
    align-items: center;
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

</style>