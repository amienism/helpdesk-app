<template>
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
    
    <q-checkbox v-model="remindMe" label="Remind me" color="black" />
    <div class="row justify-end q-gutter-sm">
        <q-btn label="Register" class="bg-white text-black btn" rounded to="/auth/register"></q-btn>
        <q-btn label="Login" class="bg-secondary text-black btn" rounded></q-btn>
    </div>
    <p class="text-center text-body">Forgot Password? <a href="#" class="text-white">Click here!</a></p>
</template>