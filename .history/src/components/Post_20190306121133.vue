<template>
    <div>
        Post - {{id}}

        Query params :<br>
        Q: {{$route.query}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>