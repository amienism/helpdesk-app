<template>
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
                    <q-input rounded outlined v-model="search" placeholder="Search" bg-color="white" dense color="black">
                        <template v-slot:append>
                            <q-icon name="search" color="gray" />
                        </template>
                    </q-input>
                </div>
                <div class="col row justify-end items-center q-gutter-md">
                    <q-icon name="translate" color="gray" size="24px" class="cursor">
                        <q-menu>
                            <q-list style="min-width: 200px" dense>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <div class="row items-center q-gutter-sm">
                                            <q-icon>
                                                <img src="../assets/icon/indonesia-flag.png" alt="">
                                            </q-icon>
                                            <span>Indonesia</span>
                                        </div>
                                    </q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section>
                                        <div class="row items-center q-gutter-sm">
                                            <q-icon>
                                                <img src="../assets/icon/usa-flag.png" alt="">
                                            </q-icon>
                                            <span>English</span>
                                        </div>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-icon>
                    <q-avatar size="2rem" class="cursor">
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                        <q-menu>
                            <q-list style="min-width: 100px" dense>
                                <q-item clickable v-close-popup>
                                    <q-item-section>Profile</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable v-close-popup>
                                    <q-item-section>Logout</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>

                    </q-avatar>
                </div>
            </div>
        </q-header>
</template>

<script>


</script>

<style scoped>

.cursor {
    cursor: pointer;
}

</style>