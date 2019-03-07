<template>
    <div>
        Post - {{id}}
        
        <br>
        Query params :<br>
        Q: {{$route.query.q}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>