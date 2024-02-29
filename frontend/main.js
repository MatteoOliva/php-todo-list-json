const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            title: 'lista',
            todoList: ['disciplina', 'disciplina', 'disciplina', 'disciplina']
        };
    },
});
app.mount('#app');