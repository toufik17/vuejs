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
                self.$router.push("/");
            }, 1000);
        }
    },
    beforeRouteEntrer(to, from, next){
        console.log('insid')
    }
}
</script>