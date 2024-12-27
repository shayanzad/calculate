<template>
    <v-btn @click="clecked" v-bind="$attrs" class="mx-1">
        <slot />
    </v-btn>
</template>
<script setup>
const emit = defineEmits(['click','classBtn'])
const clecked = () => {
    emit("click")
}

</script>
