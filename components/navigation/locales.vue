<template>
    <div id="locale-toggle"
        :class="setLocale"
        @click="toggleLocale()"
        >
        <span>
            <div>{{ setLocale }}</div>
        </span>
    </div>
</template>


<script setup>
// This is only set for dual locales
const config = useRuntimeConfig();
const setLocale = useState("setLocale", () => config.public.defaultLocale);

function toggleLocale() {
    setLocale.value = (setLocale.value === 'en') ? 'nl' : 'en'; 
}

</script>

<style lang="scss">

#locale-toggle {
    position: relative;
    padding-left: 2.2em;
    padding-bottom: 1em;
    font-size: 1em;
    color: $black;
    height: max-content;
    cursor: pointer;
    transition: 0.3s ease;
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        opacity: 0.8;
        height: 1.8em;
        margin: 0.2em;
        aspect-ratio: 1;
        background: url("/images/header/language-icon.png") no-repeat;
        background-size: cover;
        transition: $transition2;
    }
    div {
        display: block;
        margin-top: 0;
        text-transform: uppercase;
        font-size: 1em;
        text-align: right;
        transition: $transition1;
    }
    &:hover {
        span {
            color: $base-color;
            &::before {
                opacity: 1;
                transition: $transition2;
            }
            div {
                color: $black;
                transition: $transition1;
            }
        }
        &::before {
            transform: rotate(180deg);
        }
    }
}

.en > span:before,
.nl > span:before {
    position: absolute;
    top: 1em;
    right: 0;
    opacity: 0.4;
    &:hover {
        opacity: 1;
    }
}
.en > span:before {
    content: "NL";
}
.nl > span:before {
    content: "EN";
}
</style>