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
            setTimeout(function(){                
            }, 1000);
            this.$route.push("/");
        }
    }
}
</script>