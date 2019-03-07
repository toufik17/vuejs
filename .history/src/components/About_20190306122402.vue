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
    beforeRouteEnter(to, from, next){
        console.log('inside beforeRouteEnter')
    }
}
</script>