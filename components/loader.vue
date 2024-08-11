<template>
    <div>
        <div v-if="isLoading" class="loaderP flex items-center justify-center">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const router = useRouter();

const startLoading = () => {
    isLoading.value = true;
};

const stopLoading = () => {
    isLoading.value = false;
};

onMounted(() => {
    router.beforeEach((to, from, next) => {
        startLoading();
        next();
    });

    router.afterEach(() => {
        stopLoading();
    });
});

onBeforeUnmount(() => {
    // Clean up event listeners if needed
});
</script>








<style scoped>
/* HTML: <div class="loader"></div> */
.loaderP{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color:#1F2833;
    z-index: 999999999;
}
.loader {
    width: 100px;
    aspect-ratio: 1;
    display: grid;
    color: #C5C6C7;
    background:
        conic-gradient(from 90deg at 3px 3px, #0000 90deg, currentColor 0) -3px -3px/calc(50% + 1.5px) calc(50% + 1.5px);
    animation: l28 2s infinite;
}

.loader::before,
.loader::after {
    content: "";
    grid-area: 1/1;
    background: repeating-conic-gradient(#0000 0 35deg, currentColor 0 90deg);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
    border-radius: 50%;
}

.loader::after {
    margin: 20%;
}

@keyframes l28 {
    100% {
        transform: rotate(1turn)
    }
}
</style>