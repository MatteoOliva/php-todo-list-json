const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'lista',
            todoList: [],
            newItem: '',
        }
    },

    methods: {
        fetchTodoList() {
            axios.get('../backend/api/get-list.php').then((response) => {
                this.todoList = response.data;

            });
        },

        addTodoItem() {
            const item = this.newItem;

            // dopo averlo aggiunto, l'item si deve svuotare
            this.newItem = '';

            const data = { item };

            const params = {
                headers: {
                    'Content-type': 'multipart/form-data'
                },
            };
            // inviare l'item al backend
            axios.post('../backend/api/store-item.php', data, params).then((response) => {

                this.todoList = response.data;
            });
        },
    },
    // quando l app viene creata interroghiamo l'api
    mounted() {
        this.fetchTodoList();
    },
})
app.mount('#app')