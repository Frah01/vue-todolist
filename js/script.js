const {createApp} = Vue

createApp({
    data(){
        return{
            newTask: '',
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
    },
    methods: {
            addTask(){
                let object = {
                    text : this.newTask,
                    done : false
                }
                this.todo.push(object)
                this.newTask = '';
            },
            removeTask(index){
                this.todo.splice(index,1)
            },
    },
}).mount('#app')