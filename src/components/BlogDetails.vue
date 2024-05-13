<template>
<section class="blog-wrapper sect-pt4" id="blog">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="post-box">
                    <div class="post-thumb">
                        <img :src="'http://127.0.0.1:8000/'+blog.image" class="img-fluid" alt="">
                    </div>
                    <div class="post-meta">
                        <h1 class="article-title">{{ blog.title }}</h1>
                        <ul>
                            <li>
                                <span class="bi bi-person"></span>
                                <a href="#">Admin</a>
                            </li>
                            <li>
                                <span class="bi bi-tag"></span>
                                <a href="#">{{ blog.blog_category_name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="article-content">
                        {{ blog.short_description }}
                        <br><br>
                        <div v-html="blog.description"></div>
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
    name: 'BlogDetails',
    data() {
        return {
            blog: {}
        }
    },
    async mounted() {
        const blogSlug = this.$route.params.id;
        let result = await axios.get("http://127.0.0.1:8000/api/blog/details/"+blogSlug);
        console.log(result.data.data);
        this.blog = result.data.data;
    }
}
</script>
