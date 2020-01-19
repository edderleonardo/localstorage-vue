const app = new Vue({
    el: '#app',
    data: {
        titulo: 'TODO List Vue JS',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function () {
            if (this.nuevaTarea === '') {
                $.notify({
                    message: "Tienes que escribir una tarea"
                },{
                    type: 'danger',
                    z_index: 2000,
                    timer: 1000,
                });
            } else {
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                });
                this.nuevaTarea = '';
                localStorage.setItem('todo-vue', JSON.stringify(this.tareas));
            }
        },
        editarTarea: function (index) {
            this.tareas[index].estado = true;
            localStorage.setItem('todo-vue', JSON.stringify(this.tareas));
        },
        eliminar: function (index) {
           this.tareas.splice(index, 1);
            localStorage.setItem('todo-vue', JSON.stringify(this.tareas));
        }
    },
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('todo-vue'));
        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    },

});