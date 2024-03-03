const { createApp } = Vue;

createApp({
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
                console.log(response.data);
            });
        },

        addTodoItem() {
            const item = this.newItem
            console.log('item da aggiungere: ' + item);

            this.newItem = '';

            const data = {
                params: { item },
            };
            const params = {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            };
            axios.post('../backend/api/store-item.php', data, params).then((response) => {
                console.log(response.data);
            });
        },
    },

    mounted() {
        this.fetchTodoList();
    },
}).mount('#app')