<template>
    <q-drawer v-if="isAdmin" v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
        @mouseout="miniState = true" mini-to-overlay :width="250" :breakpoint="500" bordered class="bg-grey-1">
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
            <q-list padding>
                <q-item>
                    <q-item-section>
                        Main
                    </q-item-section>
                </q-item>
                <q-separator />
                <template v-for="item in main">
                    <q-item clickable v-ripple :to="item.to">
                        <q-item-section avatar>
                            <q-icon>
                                <q-img :src="iconPath(item.icon)" alt="" />
                            </q-icon>
                        </q-item-section>
    
                        <q-item-section>
                            {{item.name}}
                        </q-item-section>

                        
                    </q-item>
                </template>

                <q-item>
                    <q-item-section>
                        Master Data
                    </q-item-section>
                </q-item>
                <q-separator />

                <template v-for="item in master">
                    <q-item clickable v-ripple :to="item.to">
                        <q-item-section avatar>
                            <q-icon>
                                <q-img :src="iconPath(item.icon)" alt="" />
                            </q-icon>
                        </q-item-section>
    
                        <q-item-section>
                            {{item.name}}
                        </q-item-section>
                    </q-item>
                </template>
            </q-list>
        </q-scroll-area>
    </q-drawer>

</template>

<script>
import { ref, onMounted } from 'vue'
import nav from './nav';

export default {
    setup() {
        const main = ref(nav.main)
        const master = ref(nav.master)

        const iconPath = (imgPath) => {
            return new URL(imgPath, import.meta.url).href
        }

        return {
            drawer: ref(false),
            miniState: ref(true),
            isAdmin: ref(true),
            main, master, iconPath
        }
    }
}
</script>