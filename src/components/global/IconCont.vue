<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         :width="width"
         :height="height"
         :fill="color">
        <slot/>
    </svg>
</template>

<script>
    export default {
        name: "IconCont",
        props:{
            width: {
                type: [Number, String],
                default: 24
            },
            height: {
                type: [Number, String],
                default: 24
            },
            color: {
                type: String,
                default: 'currentColor'
            }
        }
    }
</script>