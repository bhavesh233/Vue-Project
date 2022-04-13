<template>
  <div class="home">
    <blog-post :post="welcomeScreen" />
    <Blog-post :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: { BlogPost },

  data() {
    return {
      welcomeScreen: {
        title: "welcome!",
        blogPost:
          "weekly blog articles with all things programming including HTML,CSS,JavaScript and more. Registor today to never miss a post",
        welcomeScreen: true,
        photo: "coding",
      },

      sampleBlogPost: [
        {
          title: "This is a Fillter Title",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Fillter Title",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
