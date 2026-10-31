import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/page.js';



test('todo test', async ({ page }) => {


    await page.pause();
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await expect(page).toHaveTitle('TodoMVC: Angular');

    await todoPage.addTodo('Learn Playwright');
    await todoPage.addTodo('Learn Cypress');
    await todoPage.addTodo('Learn CI/CD');
    await expect(page.locator('.todo-list li')).toHaveCount(3);
    await expect(page.locator('.todo-list li').first()).toContainText('Learn Playwright');

    await todoPage.checkTodo(0);
    await expect(page.locator('.todo-list li').first()).toHaveClass(/completed/);

    await todoPage.clickFilter('Completed');
    await expect(page.locator('.todo-list li')).toHaveCount(1);
    await expect(await todoPage.isTodoCompleted(0)).toBe(true);

    await todoPage.clickFilter('Active');
    await expect(page.locator('.todo-list li')).toHaveCount(2);

    await todoPage.getalltodos();

    await expect(page.locator('.todo-list li')).toHaveCount(3);
   
    await todoPage.clearCompleted();
    await expect(page.locator('.todo-list li')).toHaveCount(2);

    const gettodotext = await todoPage.getTodoText(1);
    console.log(gettodotext);

})

