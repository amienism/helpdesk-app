<template>
    <div class="main-menu-wrapper column items-center justify-center q-gutter-md">
        <h3 class="q-pa-none q-ma-md">Welcome, User</h3>
        <h5 class="q-pa-none q-ma-none">How can we help you today?</h5>
        <div class="row q-gutter-md">
            <div>
                <router-link to="/app/submit-issue">
                    <q-card class="my-card text-white">
                        <q-card-section class="text-center">
                            <q-icon name="report" size="6rem"></q-icon>
                        </q-card-section>
        
                        <q-card-section>
                            <div class="main-menu-title">
                                Submit issue
                            </div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
            <div>
                <router-link to="/app/my-ticket">
                    <q-card class="my-card text-white">
                        <q-card-section class="text-center">
                            <q-icon name="confirmation_number" size="6rem"></q-icon>
                        </q-card-section>
        
                        <q-card-section>
                            <div class="main-menu-title">
                                My Ticket
                            </div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
            <div>
                <router-link to="/app/contact">
                    <q-card class="my-card text-white">
                        <q-card-section class="text-center">
                            <q-icon name="contact_support" size="6rem"></q-icon>
                        </q-card-section>
        
                        <q-card-section>
                            <div class="main-menu-title">
                                Contact Us
                            </div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
        
        
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
    }

    /* .main-menu-wrapper {
        min-height: 85vh;
    } */

    .main-menu-title {
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }

    .my-card {
        min-width: 150px;
        background-color: #00796B     ;
        transition: all .2s ease-in-out;
    }
    .my-card:hover {
        background-color: #8BC34A;
        scale: 110%;
    }
</style>