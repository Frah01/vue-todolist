const {createApp} = Vue

createApp({
    data(){
        return{
            newTask: '',
            todo : [
                {
                    text : 'Andare a fare la spesa',
                    done : true,
                },
                {
                    text : 'Esercitarsi',
                    done : false,
                },
                {
                    text : 'Andare in palestra',
                    done : true,
                },
                {
                    text : 'Lavare il cane',
                    done : false,
                },
                {
                    text : 'Cucinare',
                    done : true,
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
            check(index){
                let task = this.todo[index];

                if(task.done == true){
                    task.done = false;
                }

                else{
                    task.done = true;
                }
            }
    },
}).mount('#app')