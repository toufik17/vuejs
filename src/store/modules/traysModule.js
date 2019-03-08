const traysModule = {
    namespaced: true,
    state:{
        'trays': []        
    },
    getters:{
        defaultTray(state){
            state.trays.push({
                'label': 'dossier de credit',
                'description': 'dossier de financement',
                'elementCount': '0',
                'treatmentLevel': 'envelope',
                'treatmentType': 'classification',
                "humbnail": 'fa fa-trash',
                "url": require('@/assets/img/document.png')
            }, {
                'label': 'dossier',
                'description': 'dossier de financement',
                'elementCount': '0',
                'treatmentLevel': 'envelope',
                'treatmentType': 'classification',
                "humbnail": 'fa fa-trash',
                "url": 'https://www.thomasmalbaux.fr/wp-content/uploads/2012/03/dossierlocation_700x500.png'
            }, {
                'label': 'dossier',
                'description': 'dossier de financement',
                'elementCount': '0',
                'treatmentLevel': 'envelope',
                'treatmentType': 'classification',
                "humbnail": 'fa fa-trash',
                "url": 'https://www.thomasmalbaux.fr/wp-content/uploads/2012/03/dossierlocation_700x500.png'
            });
        },  
        trays(state){
            return state.trays;
        },
    },
    mutations:{
        addTray(state, payload){
            state.trays.push({
                'label': payload.label,
                'description': payload.description,
                'elementCount': payload.elementCount,
                'treatmentLevel': payload.treatmentLevel,
                'treatmentType': payload.treatmentType,
                "humbnail": payload.humbnail,
                "url": payload.url
            });
        },        
    },
    actions:{
        addTray(context){
            setTimeout(function() {
                context.commit("addTray");
            }, 1000);
        }
    },
}

export default traysModule;