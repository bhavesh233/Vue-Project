<template>
  <div class="form-wrap">
    <Loading v-if="loading" />

    <Modal v-if="error" :modalMessage="this.errorMsg" v-on:close-modal="closeModal" />

    <form class="register">
      <p class="login-register">
        Already have an account
        <router-link class="router-link" :to="{ name: 'Login' }"> Login </router-link>
      </p>
      <h2>Create your Blog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <user class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <user class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <user class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="email" v-model="email" />
          <email class="icon" />
        </div>

        <div class="input">
          <input type="password" placeholder="password" v-model="password" />
          <password class="icon" />
        </div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <button @click="homePage">Home</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import Modal from "../components/Model.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  name: "Register",
  components: {
    email,
    password,
    user,
    Modal,
    Loading,
  },
  data() {
    return {
      loading: false,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    homePage() {
      this.$router.push({ name: "Home" });
    },
    async register() {
      if (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== "" &&
        this.email !== "" &&
        this.password !== ""
      ) {
        this.loading = true;
        this.error = false;
        this.errorMsg = "";
        try {
          const firebaseAuth = await firebase.auth();
          const createUser = await firebaseAuth.createUserWithEmailAndPassword(
            this.email,
            this.password
          );
          const result = await createUser;
          const dataBase = db.collection("users").doc(result.user.uid);
          await dataBase.set({
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
          });

          this.loading = false;
          this.$router.push({ name: "Home" });

          return;
        } catch (error) {
          this.loading = false;
          this.error = true;
          this.errorMsg = error.message;
        }
      } else {
        this.error = true;
        this.errorMsg = "Enter ValidData for Create User";
      }
    },

    closeModal() {
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
