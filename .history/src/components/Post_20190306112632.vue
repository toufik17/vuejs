<template>
    <div>
        Post - {{id}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    props

}
</script>