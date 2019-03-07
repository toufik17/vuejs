<template>
    <div>
        <h1>about</h1>
        <button @click="home"> Return home</button>
    </div>
</template>

<script>
export default {
    methods:{
        home: function(){
            setTimeout(function());
            this.$route.push("/");
        }
    }
}
</script>