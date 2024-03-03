const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'lista',
            todoList: [],
            newItem: '',
        };
    },

    methods: {
        fetchTodoList() {
            axios.get('../backend/api/get-list.php').then((response) => {
                this.todoList = response.data;
                console.log(response.data);
            });
        },

        addTodoItem() {
            console.log('item da aggiungere: ' + this.newItem);
            this.newItem = '';
        }
    },

    mounted() {
        this.fetchTodoList();
    },
});
app.mount('#app');