<template>
    <div>
        Post - {{id}}

        Query params :<br>
        Q: {{$route.requery}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>