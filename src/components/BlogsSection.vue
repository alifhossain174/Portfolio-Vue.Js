<template>
<section id="blog" class="blog-mf sect-pt4 route">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="title-box text-center">
                    <h3 class="title-a">
                        Blog
                    </h3>
                    <p class="subtitle-a">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div class="line-mf"></div>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
                <div class="card card-blog">
                    <div class="card-img">
                        <router-link :to="'/blog/' + blog.slug"><img :src="'http://127.0.0.1:8000/'+blog.image" alt="" class="img-fluid"></router-link>
                    </div>
                    <div class="card-body">
                        <div class="card-category-box">
                            <div class="card-category">
                                <h6 class="category">{{ blog.blog_category_name }}</h6>
                            </div>
                        </div>
                        <h3 class="card-title"><router-link :to="'/blog/' + blog.slug">{{ blog.title }}</router-link></h3>
                        <p class="card-description">
                            {{ blog.short_description }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="post-author">
                            <a href="#">
                                <img src="assets/img/testimonial-2.jpg" alt="" class="avatar rounded-circle">
                                <span class="author">Admin</span>
                            </a>
                        </div>
                        <div class="post-date">
                            <span class="bi bi-clock"></span> {{ blog.created_at }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BlogsSection',
    data(){
        return {
            blogs: [],
        }
    },
    async mounted() {
        let results = await axios.get("http://127.0.0.1:8000/api/get/all/blogs");
        this.blogs = results.data.data
    },
}
</script>

<style scoped>

</style>
