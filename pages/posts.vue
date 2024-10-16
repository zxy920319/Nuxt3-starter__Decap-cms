<template>
    <ALayoutContent>
        <div class="posts-wrapper">
            <NuxtLink v-for="post in posts" :key="post.slug" :to="`/post/${post.slug}`">
                <ACard :title="post.title" hoverable>
                    {{ post.description }}
                </ACard>
            </NuxtLink>
        </div>
    </ALayoutContent>
</template>

<script setup>
import { LayoutContent as ALayoutContent, Card as ACard } from 'ant-design-vue'

const { data: posts } = reactive(await useAsyncData("posts", () => queryContent("posts").find()))
console.log(posts);

</script>

<!-- <script>
import { LayoutContent as ALayoutContent, Card as ACard } from 'ant-design-vue'

export default {
    components: { ALayoutContent, ACard },
    async asyncData({ $content }) {
        const posts = await $content("posts").fetch();
        console.log('posts', posts);

        return {
            posts,
        };
    },
};
</script> -->
<style lang="scss" scoped>
.posts-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .ant-card {
        width: 300px;

        :deep(.ant-card-head-title) {
            height: auto;
            white-space: pre-wrap;

        }

        :deep(.ant-card-body) {
            height: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>