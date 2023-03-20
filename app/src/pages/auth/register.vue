<template>
    <h4 class="q-pa-none q-ma-none"><b>Register</b></h4>
    <q-input rounded outlined v-model="text" placeholder="Username" bg-color="white">
        <template v-slot:prepend>
            <q-icon name="alternate_email" color="gray" />
        </template>
    </q-input>
    <q-input rounded outlined v-model="text" placeholder="Name" bg-color="white">
        <template v-slot:prepend>
            <q-icon name="person" color="gray" />
        </template>
    </q-input>
    <q-input type="password" rounded outlined v-model="text" placeholder="Password" bg-color="white">
        <template v-slot:prepend>
            <q-icon name="visibility" color="gray" />
        </template>
    </q-input>
    <q-input type="password" rounded outlined v-model="text" placeholder="Confirm Password" bg-color="white">
        <template v-slot:prepend>
            <q-icon name="visibility" color="gray" />
        </template>
    </q-input>
    <div class="row justify-between items-center q-gutter-sm">
        <span>Already have account? <router-link to="/auth/login">Click here to login.</router-link></span>
        <q-btn label="Register" class="bg-secondary text-black btn" rounded></q-btn>
    </div>
</template>

<style scoped>

a {
    text-decoration: underline;
    color: white;
}

</style>