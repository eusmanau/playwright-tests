import { test, expect } from '@playwright/test';

test('open the website and check elements', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject');

  await expect(page).toHaveURL(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',

  );

  await page.getByRole('button', { name: 'Customer Login' }).click();

await page.locator('#userSelect').selectOption('2');

await page.getByRole('button', { name: 'Login'}).click();

const greeting = await expect(page.getByText('Welcome Harry Potter !!')).toContainText('Harry Potter');

await expect(page.getByText('Account Number : 1004 ,')).toContainText('1004 ,');

await page.getByRole('button', {name: 'Deposit'}).click();

await expect(page.getByText('Amount to be Deposited :')).toBeVisible();

await page.getByPlaceholder('amount').fill('7422');

await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();

await expect(page.getByText('Deposit Successful')).toBeVisible();

await expect(page.getByText('Balance : 7422 ,')).toContainText('7422 ,');

await expect(page.getByText('Currency : Dollar')).toContainText('Dollar')

await page.getByRole('button', {name: 'Logout'}).click();

await expect(page.getByText('Your Name :')).toBeVisible();

await page.getByRole('button', {name:'Home'}).click();

await expect(page.getByRole('button', {name: 'Bank Manager Login'})).toBeVisible();

await page.getByRole('button', {name: 'Bank Manager Login'}).click();


});