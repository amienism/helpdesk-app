<template>
    <q-layout view="hHh lpR fFf">

        <appbar />

        <!-- Sidebar Component  -->
        <sidebar />

        <q-page-container>
            <q-list dense class="row q-px-xl q-py-sm shadow-1">
                <template v-for="(route, index) in $router.options.routes.filter(x=>x.path==$route.matched[0].path)">
                    <template v-for="child in route.children">
                        <q-item clickable v-ripple :to="route.path+'/'+child.path">
                            <q-item-section >
                                {{ child.name }}
                            </q-item-section>
                        </q-item>
                        <q-separator vertical></q-separator>
                    </template>
                </template>
            </q-list>
            <div class="q-pa-md">
                <router-view />
            </div>
        </q-page-container>

    </q-layout>
</template>

<script>
    import sidebar from '../components/sidebar.vue'
    import appbar from '../components/appbar.vue'

    export default {
        data() {
            return {
                children: []
            }
        },
        components: {
            sidebar,
            appbar
        },
        watch: {
            $route: function (current) {

                const route = this.$router.options.routes.find(route => route.path === current.path)
                console.log(this.$router.options.routes)
                if (route && Array.isArray(route.children)) {
                    this.children = route.children
                } else if (route) {
                    this.children = []
                }
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

    .q-item {
        font-weight: 400;
        text-shadow: 0px 0px 1px black;
    }
    
</style>