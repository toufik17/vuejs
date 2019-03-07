<template>
    <div>
        Post - {{id}}

        Query params :<br>
        Q: {{$route.}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>