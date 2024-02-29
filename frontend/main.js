const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'lista',
            todoList: ['disciplina', 'disciplina', 'disciplina', 'disciplina']
        };
    },

    methods: {
        fetchTodoList() {
            axios.get('http://localhost/php-todo-list-json/backend/api/get-list.php').then((response) => {
                this.todoList = response.data;
                console.log(response.data);
            });
        },
    },
    mounted() {
        this.fetchTodoList();
    },
});
app.mount('#app');