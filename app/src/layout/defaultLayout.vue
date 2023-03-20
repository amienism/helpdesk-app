<template>
    <q-layout view="hHh lpR fFf">

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
                <div class="col">
                    <q-input rounded outlined v-model="text" placeholder="Search" bg-color="white" dense color="black">
                        <template v-slot:append>
                            <q-icon name="search" color="gray" />
                        </template>
                    </q-input>
                </div>
                <div class="col row justify-end items-center q-gutter-md">
                    <q-icon name="translate" color="gray" size="24px"/>
                    <q-avatar size="2rem">
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>
                </div>
            </div>
        </q-header>

        <!-- <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
            @mouseout="miniState = true" mini-to-overlay :width="200" :breakpoint="500" bordered class="bg-grey-1">
            <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
                <q-list padding>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="dashboard" />
                        </q-item-section>

                        <q-item-section>
                            Dashboard
                        </q-item-section>
                    </q-item>

                    <q-item active clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="confirmation_number" />
                        </q-item-section>

                        <q-item-section>
                            Ticket
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="send" />
                        </q-item-section>

                        <q-item-section>
                            Send
                        </q-item-section>
                    </q-item>

                    <q-separator />

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="drafts" />
                        </q-item-section>

                        <q-item-section>
                            Drafts
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer> -->

        <q-page-container>
            <q-page padding>
                <router-view />
            </q-page>
        </q-page-container>

    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  }
}
</script>

<style scoped>
.q-page {
    position: relative;
}

.body {
    background-color: #efefef;
}
</style>