<template><img class= "logo" src="../assets/resto-logo.jpg" />
    <h1>Login</h1>
    <div class="Login">
         <input typew="text" v-model="name" placeholder="Enter Name"/>
         <input type="text" v-model="email" placeholder="Enter Email"/>
         <input type="password" v-model="password" placeholder="Enter Password"/>
         <button v-on:click="signUp" >Login</button>
         <p>
         <router-link to ="/Sign-up"  >SignUp</router-link>
         </p>
    
    </div>
    

<h1>Login Page</h1>
</template>

<script>
export default {
    name:'Login'
}
</script>