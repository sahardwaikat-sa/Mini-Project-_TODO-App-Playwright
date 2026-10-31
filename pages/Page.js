exports.TodoPage = class TodoPage {

    constructor(page) {
        this.page = page;
        this.todoInput = page.locator('.new-todo');
        this.todoList = page.locator('.todo-list li');
        this.filters = page.locator('.filters');
        this.allitems= page.locator('.filters >> text=All');
        this.clearCompletedButton = page.locator('.clear-completed');
            


    }

    async goto() {
        await this.page.goto('https://todomvc.com/examples/angular/dist/browser/#/all');
    }

    async addTodo(todoText) {
        await this.todoInput.fill(todoText);
        await this.todoInput.press('Enter');
    }

    async checkTodo(index) {
        await this.todoList.nth(index).locator('.toggle').check();
    }

    async clickFilter(filterText) {
        await this.page.locator(`.filters >> text=${filterText}`).click();
    }

    async clearCompleted() {
        await this.clearCompletedButton.click();
    }

    async getTodoCount() {
        return await this.todoList.count();
    }

    async getTodoText(index) {
        return await this.todoList.nth(index).textContent();
    }

    async isTodoCompleted(index) {
        const todoClass = await this.todoList.nth(index).getAttribute('class');
        return todoClass.includes('completed');
    }   
 async getalltodos() {
    await this.allitems.click();


  }
    
}
