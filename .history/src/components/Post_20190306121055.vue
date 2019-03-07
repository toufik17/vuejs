<template>
    <div>
        Post - {{id}}

        Query params :<br>
        Q: {{this.}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>