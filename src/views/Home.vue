<template>
  <div class="home">
    <form @submit.prevent="addText">
       <div class="text">
        <input
          type="text"
          v-model="text"
          placeholder="text"
          class="form-control"
        />
      </div>
       <button class="btn btn-primary mt-3" type="submit">Ekle</button>
    </form>
   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',

}
</script>
