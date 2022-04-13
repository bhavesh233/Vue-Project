<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
          <span>Toggle Editing Post</span>
          <input type="checkbox" v-model="editPost">
      </div>
      <BlogCard :post="post" v-for="(post,index) in sampleBlogsCards" :key="index" />
    </div>
  </div>
</template>



<script>
 import BlogCard from "../components/BlogCard.vue"
export default {
  name: "blogs",
  components:{
      BlogCard
  },
  computed:{
      sampleBlogsCards(){
          
          return this.$store.state.sampleBlogCards;
      }
  }
  
};
</script>

<style scoped></style>
