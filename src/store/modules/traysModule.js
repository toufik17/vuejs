const traysModule = {
    namespaced: true,
    state:{
        'trays': []        
    },
    getters:{
        defaultTray(state){
            state.trays.push({
                'label': 'C',
                'description': 'C',
                'elementCount': '0',
                'treatmentLevel': 'e',
                'treatmentType': 'clf',
                "humbnail": require('@/assets/img/document.png'),
                "url": ''
            }, {
                'label': 'FI',
                'description': 'FI',
                'elementCount': '0',
                'treatmentLevel': 'e',
                'treatmentType': 'clf',
                "humbnail": 'https://www.thomasmalbaux.fr/wp-content/uploads/2012/03/dossierlocation_700x500.png',
                "url": ''
            }, {
                'label': 'FA',
                'description': 'FA',
                'elementCount': '0',
                'treatmentLevel': 'e',
                'treatmentType': 'clf',
                "humbnail": 'https://www.thomasmalbaux.fr/wp-content/uploads/2012/03/dossierlocation_700x500.png',
                "url": ''
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
