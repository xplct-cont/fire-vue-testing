<template>
<CreateUser/>
</template>

<script>
// @ is an alias to /src
import CreateUser from '@/components/CreateUser.vue'

export default {
  name: 'HomeView',
  components: {
   CreateUser
  }
}
</script>
