<template>
    <div class="row">
          <div class="col-lg-4" v-for="tray in trays" :key="tray.id">
          <div class="card">              
              <img :src="tray.url" class="card-img-top" :alt="tray.label">
              <div class="card-body">
                <h5 class="card-title">{{tray.label}}</h5>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                      <i class="fab fa-youtube youtube-color"></i>
                      information
                  </li>
                  <li class="list-group-item">
                      <ul class="tray-informations">
                          <li><i class="fas fa-bars"></i> treatment level : {{tray.treatmentLevel}}</li>
                          <li><i class="far fa-play-circle"></i> element count : {{tray.elementCount}}</li>
                          <li><i class="far fa-thumbs-up"></i> treatment type : {{tray.treatmentType}}</li>
                      </ul>
                  </li>
              </ul>
              <div class="card-body">
                  <a href="#"><i :class="tray.humbnail"></i></a> 
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed:{
        ... mapGetters('traysModule', ["trays"]),
    },
    methods: {
        addTray(){
            this.$store.commit("traysModule/addTray", {                
                    elementCount: 0,
                    treatmentLevel: 'ENV',
                    treatmentType: 'CLASSIF',
                    humbnail: "fa fa-trash"            
            });
        }
    }
}
</script>

<style scoped>
    .list-group, .tray-informations {
        padding-left: 0;
    }
    .tray-informations li{
        list-style: none;
        padding-bottom: 5px;
    }
    .youtube-color{
        color: #FF0000;
    };
</style>        
                
        
                
                
                
                

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                