<template>
  <div class="container-with-navbar">
    <div>
      <label for="name">name</label>
      <input type="text" name="name" v-model="user.name">
    </div>
    <div>
      <label for="phone">phone</label>
      <input type="text" name="phone" v-model="user.phone">
      <button type="button" @click="submit()">submit</button>
    </div>

    <!-- <div>name: {{ user.name }}</div>
    <div>phone: {{ user.phone }}</div> -->

    <!-- <div>
      <button type="button" @click="testError()">submit</button>
      Error:  {{ error?.statusMessage }}
    </div> -->
  </div>
</template>

<script setup>
const user = reactive({
  name: 'Watsons',
  phone: '26',
})
const error = ref(null)

const testError = async () => {
  const { error: errorData } = useFetch('api/nothing');
  error.value = errorData.value;
  
  console.log('error:', error.value);
}

// const name = ref('Ted');
// const phone = ref(18);

// const submit = async () => {
//   const { data, pending, error } = useFetch('/api/user', {
//     method: 'post',
//     body: {
//       name: user.name,
//       phone: user.phone
//     },
//   })
//   console.log('user:', data);
// };



// console.log('user:', user.value);

</script>


