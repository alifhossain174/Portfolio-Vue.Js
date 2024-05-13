<template>
<HeroSlider></HeroSlider>
<BlogsSection></BlogsSection>
</template>

<script>
import BlogsSection from './BlogsSection.vue';
import HeroSlider from './HeroSlider.vue';

export default {
    name: 'HomePage',
    components: {
        HeroSlider,
        BlogsSection
    }
}
</script>

<style scoped>

</style>
