<template>
    <div class="card col-md-5 mx-auto bg-secondary text-light card-body mt-4">
      <form @submit.prevent="onSubmit">
    
        <div class="form-group">
          <label>Firstname</label>
          <input v-model="form.fname" class="form-control" required />
        </div>
  
       <div class="form-group">
        <label>Lastname</label>
          <input v-model="form.lname" class="form-control" required />
       </div>
  
        <div class="form-group mt-3">
          <label>Email</label>
          <input
            v-model="form.email"
            class="form-control"
            type="email"
            required
          />
        </div>
        <button type="submit" class="btn btn-info d-flex justify-content-start mt-3">
          Create User
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { createUser } from '@/firebase'
  import { reactive } from 'vue'
  export default {
    setup() {
      const form = reactive({ fname: '', lname: '', email: '' })
      const onSubmit = async () => {
        await createUser({ ...form })
        form.fname = ''
        form.lname = ''
        form.email = ''
      }
      return { form, onSubmit }
    }
  }
  </script>