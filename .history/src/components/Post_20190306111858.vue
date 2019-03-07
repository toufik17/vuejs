<template>
    <div>
        Post - 
        {{id}}
    </div>
</template>

<script>
export default {
    date(){
        return {
            id: this.$route.params
        }
    }
}
</script>