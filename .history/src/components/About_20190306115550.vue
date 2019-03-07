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
            const self = this;
            setTimeout(function(){                
                s.$route.push("/");
            }, 1000);
        }
    }
}
</script>