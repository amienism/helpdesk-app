<template>
  <q-dialog v-model="dialog" persistent>
    <q-card class="dialog-card">
        <template v-if="mode.delete">
          <q-card-section class="row items-center">
              <q-avatar icon="delete" color="negative" text-color="white" />
              <span class="q-ml-sm"><b>Are you sure delete?</b> This action cannot be undone!</span>
          </q-card-section>

          <q-card-actions align="right">
              <q-btn flat label="Cancel" color="black" @click="closeDialog" />
              <q-btn flat label="Delete" color="primary" @click="submitDelete(formData.id)" />
          </q-card-actions>
        </template>
        <template v-if="mode.create || mode.update">
          <q-card-section>
            <form action="" class="column q-gutter-md">
              <span class="text-h6" v-if="mode.create">Create New Issue Type</span>
              <span class="text-h6" v-if="mode.update">Update Issue Type</span>
              <q-input filled v-model="formData.type_name" label="Type Name" dense/>
            </form>
          </q-card-section>
          <q-card-actions align="right">
              <q-btn flat label="Cancel" color="black" @click="closeDialog" />
              <q-btn v-if="mode.create" flat label="Create" color="primary" @click="submitCreate" />
              <q-btn v-if="mode.update" flat label="Update" color="primary" @click="submitUpdate(formData.id)" />
          </q-card-actions>
        </template>
      </q-card>

    </q-dialog>


  <div class="row justify-between q-mb-sm">
    <q-input rounded outlined v-model="search" placeholder="Search" bg-color="white" dense color="black">
        <template v-slot:append>
            <q-icon name="search" color="gray" />
        </template>
    </q-input>
    <q-btn label="Create" color="primary" @click="handleCreate"></q-btn>
  </div>
  <q-table :rows="issueTypes" :columns="columns" row-key="id" :loading="dataLoading"
    table-header-class="bg-primary text-white text-weight-bolder">
    <template v-slot:body-cell-index="props">
      <q-td :props="props">
        {{ props.rowIndex+1 }}
      </q-td>
    </template>
    <template v-slot:body-cell-action="props">
      <q-td :props="props" class="q-gutter-xs">
        <q-btn size="xs" color="primary" icon="mode_edit" @click="handleEdit(props.row.id)">
        </q-btn>
        <q-btn size="xs" color="negative" icon="delete" @click="handleDelete(props.row.id)">
        </q-btn>
      </q-td>
    </template>
    <template v-slot:no-data>
      <div class="q-mx-auto">
        <span>No Data Available</span>
      </div>
    </template>
  </q-table>
</template>

<script>
  const columns = [{
      name: 'index',
      align: 'center',
      label: '#',
    },
    {
      name: 'issue_types',
      align: 'left',
      label: 'Issue Type Name',
      field: 'type_name',
    },
    {
      name: 'created_by',
      align: 'center',
      label: 'Created By',
      field: 'created_by',
    },
    {
      name: 'action',
      align: 'center',
      label: 'Action',
    },
  ]

  import {
    ref,
    onMounted
  } from 'vue';
  import axios from 'axios';

  export default {
    setup() {
      const issueTypes = ref([]);
      const formData = ref({})
      const dataLoading = ref(false)
      const dialog = ref(false);
      const mode = ref({
        create: false,
        update: false,
        delete: false,
      })

      const getIssueTypes = async () => {
        dataLoading.value = true;
        try {
          const {
            data: {
              data
            }
          } = await axios.get('/issue-type')
          issueTypes.value = data;
          dataLoading.value = false;
        } catch (error) {
          dataLoading.value = false;
          console.log(error)
        }
      }

      const getIssueTypeById = async (id) => {
        try {
          const {
            data: {
              data
            }
          } = await axios.get('/issue-type/'+id)
          formData.value = data;
        } catch (error) {
          console.log(error)
        }
      }

      const handleCreate = () => {
        formData.value = {};
        mode.value.create = true;
        dialog.value = true;
      }

      const submitCreate = async () => {
        try {
          const {data: {messages}} = await axios.post('/issue-type', formData.value)
          dialog.value = false;
          mode.value.create = false;
          await getIssueTypes();
        } catch (error) {
          dialog.value = false;
          mode.value.create = false;
        }
      }

      const handleEdit = async (id) => {
        await getIssueTypeById(id);
        mode.value.update = true;
        dialog.value = true;
      }
      
      const submitUpdate = async (id) => {
        try {
          const {data: {messages}} = await axios.put('/issue-type/'+id, {type_name: formData.value.type_name})
          dialog.value = false;
          mode.value.update = false;
          await getIssueTypes();
        } catch (error) {
          dialog.value = false;
          mode.value.update = false;
        }
      }
      
      const handleDelete = async (id) => {
        await getIssueTypeById(id);
        mode.value.delete = true;
        dialog.value = true;
      }

      const submitDelete = async (id) => {
        try {
          const {data: {messages}} = await axios.delete('/issue-type/'+id)
          dialog.value = false;
          mode.value.delete = false;
          await getIssueTypes();
        } catch (error) {
          dialog.value = false;
          mode.value.delete = false;
        }
      }

      const closeDialog = () => {
        mode.value.create = false;
        mode.value.update = false;
        mode.value.delete = false;
        dialog.value = false;
      }

      onMounted(() => {
        getIssueTypes();
      })

      return {
        columns,
        issueTypes,
        dataLoading,
        handleCreate,
        dialog,
        mode,
        formData,
        submitCreate,
        handleEdit,
        closeDialog,
        submitUpdate,
        handleDelete,
        submitDelete
      }
    }
  }
</script>

<style scoped>

.dialog-card {
  min-width: 400px;
}

</style>