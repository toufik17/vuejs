<template>
    <div>
        Post - {{id}}

        Query params :<br>
        Q: {{this.$route}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>