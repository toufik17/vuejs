<template>
    <div>
        Post {{id}}
    </div>
</template>

<script>
export default {
    date(){
        id: this.$route.params.id;
    }
}
</script>