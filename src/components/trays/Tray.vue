<template>
    <div class="container row">
          <div class="col-lg-4" v-for="tray in trays" :key="tray.id">
          <div class="card">              
              <img :src="tray.humbnail" class="card-img-top" :alt="tray.label">
              <div class="card-body">
                <h3 class="card-title">{{tray.label}}</h3>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                      <i class="fa fa-info-circle"></i>
                      information
                  </li>
                  <li class="list-group-item">
                      <ul class="tray-informations">
                          <li><i class="fas fa-bars"></i> Niveau traitement : {{tray.treatmentLevel}}</li>
                          <li><i class="fas fa-arrow-circle-up"></i> Nombre élément : {{tray.elementCount}}</li>
                          <li><i class="fas fa-align-center"></i> Type traitement : {{tray.treatmentType}}</li>
                      </ul>
                  </li>
              </ul>
                <div class="card-body">
                    <a target="_blank" :href="tray.url" class="btn btn-secondary btn-block">View</a>
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
                
        
                
                
                
                

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                