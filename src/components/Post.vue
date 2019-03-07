<template>
    <div>
        Post - {{id}}
        
        <br>
        Query params :<br>
        {{$route.query}}
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>