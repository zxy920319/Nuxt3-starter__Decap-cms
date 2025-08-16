<template>
    <ALayoutContent :style="{ 'background-color': 'rgb(239, 240, 244)' }">
        <div class="events-wrapper">
            <NuxtLink v-for="event in events" :key="event.slug" :to="event.link" target="_blank">
                <ACard :bordered="false" hoverable>
                    <template #cover>
                        <img :src="event.image || '/images/upload/logo.jpg'" alt="event cover" srcset="">
                    </template>
                    <div>
                        <span class="title">
                            {{ event.title }}
                        </span>
                        <div class="author">
                            {{ event.author }}
                        </div>
                        <div class="subtitle">
                            {{ truncate(event.subtitle) }}
                        </div>
                    </div>
                </ACard>
            </NuxtLink>
        </div>
    </ALayoutContent>
</template>

<script setup>
import { LayoutContent as ALayoutContent, Card as ACard } from 'ant-design-vue'

const { data: events } = reactive(await useAsyncData("events", () => queryContent("events").where({ draft: false }).sort({ pin: 1 }).find()))

const truncate = (txt) => {
    if (!txt) return '';
    return txt.length > 48 ? txt.substring(0, 48) + '...' : txt;
}
</script>

<style lang="scss" scoped>
.events-wrapper {
    max-width: 80vw;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: $spacing5;
    margin-inline: $spacing4;

    .ant-card {
        width: 500px;
        height: 300px;
        display: flex;
        box-shadow: 0 1px 2px 0 rgba(0, 108, 150, 0.1), 0 1px 6px -1px rgba(0, 108, 150, 0.1), 0 2px 4px 0 rgba(0, 108, 150, 0.1);

        &.ant-card-hoverable:hover {
            border-color: transparent;
            box-shadow: 0 1px 2px -2px rgba(0, 108, 150, 0.3), 0 3px 6px 0 rgba(0, 108, 150, 0.2), 0 5px 12px 4px rgba(0, 108, 150, 0.2);
        }

        :deep(.ant-card-cover) {
            border-radius: 32px;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1);
            padding: 20px 20px 28px 20px;
            box-sizing: border-box;
            margin: 20px;
        }

        :deep(.ant-card-body) {
            width: 60%;
            display: block;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: wrap;
        }

        .title {
            font-family: "Abril Fatface", "serif";
            font-size: 1.125rem;
            line-height: 1.4;
            color: #222022;
            box-decoration-break: clone;
            background-image: linear-gradient(90deg, #B7F9E9, #FFEF7E);
            background-size: 100% 21%;
            background-repeat: no-repeat;
            background-position: 0 85%;
            padding: 0 4px;
            margin-left: -4px;
        }

        .author {
            font-size: 0.75rem;
            color: #3d3d3d;
            margin: 0.25rem 0;
        }

        .subtitle {
            font-size: 0.85rem;
            color: #2d2d2d;
            width: 100%;
            height: 4rem;
            overflow: hidden;
            margin-top: 1.5rem;
        }

    }
}
</style>