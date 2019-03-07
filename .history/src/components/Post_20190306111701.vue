<template>
    <div>
        Post {{id}}
    </div>
</template>

<script>
export default {
    date(){
        id: this.$router.params.id;
    }
}
</script>