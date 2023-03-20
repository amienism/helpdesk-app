<template>
    <div class="submit-issue-wrapper">
        <div class="row">
            <form action="" class="submit-issue-form">
                <router-link to="/app/home"><q-icon name="arrow_back"></q-icon>Back</router-link>
                <h6 class="q-pa-none q-ma-none">Submit New Issue</h6>
                <q-input filled v-model="text" label="Name" dense/>
                <q-input filled v-model="text" label="Phone Number/Email" dense/>
                <q-select filled v-model="model" :options="['Internet Connection', 'Computer Problem']" label="Issue Type" dense/>
                <q-input type="textarea" filled v-model="text" label="Description" dense/>
                <q-select filled v-model="model" :options="['Low', 'Medium', 'High']" label="Issue Priority" dense/>
                <div class="row justify-end q-gutter-sm">
                    <q-btn label="Cancel" class="bg-negative text-white " rounded href="/app/home"></q-btn>
                    <q-btn label="Submit" class="bg-primary text-white" rounded></q-btn>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.submit-issue-wrapper {
    padding: 0 10rem;
}

.submit-issue-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 0 10rem;
    padding: 0 4rem;
}

a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
    max-width: 50px;
}


</style>