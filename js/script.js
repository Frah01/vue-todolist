const {createApp} = Vue

createApp({
    data(){
        return{
            todo : [
                {
                    text : 'Andare a fare la spesa',
                    done : false,
                },
                {
                    text : 'Esercitarsi',
                    done : false,
                },
                {
                    text : 'Andare in palestra',
                    done : false,
                },
                {
                    text : 'Lavare il cane',
                    done : false,
                },
                {
                    text : 'Cucinare',
                    done : false,
                },
                {
                    text : 'Fare la doccia',
                    done : false,
                }
            ]
        }
    }
}).mount('#app')