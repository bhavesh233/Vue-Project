<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <Modal v-if="error" :modalMessage="this.errorMsg" v-on:close-modal="closeModal" />
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import Modal from "../components/Model.vue";
export default {
  name: "blogs",
  components: {
    BlogCard,
    Modal,
  },
  data() {
    return {
      error: false,
      errorMsg: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        if (!this.$store.state.editPost && !this.$store.state.user) {
          this.error = true;
          this.errorMsg = "You are not Login, You can't edit";
        }
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  methods: {
    closeModal() {
      this.error = false;
    },
  },
  beforeDestory() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms cubic-bezier(0.4, 0, 1, 1) all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
