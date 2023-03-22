<template>
    <q-layout>
        <q-header bordered class="bg-primary text-white q-px-xl">
            <div class="row justify-between items-center">
                <div class="col">
                    <q-toolbar>
                        <q-toolbar-title>
                            <q-avatar square>
                                <img src="../assets/icon/helpdesk.png">
                            </q-avatar>
                            Helpdesk
                        </q-toolbar-title>
                    </q-toolbar>
                </div>
            </div>
        </q-header>
        <q-page-container>
            <div class="q-pa-md">
                    <router-view />
            </div>
        </q-page-container>
    </q-layout>
</template>