import { describe } from 'node:test';

import { test, expect } from '@playwright/test';

// test('check buttom ui', async ({ page }) => {
//   await page.goto('http://uitestingplayground.com/click');

//   await page.locator('#badButton').click();

//   await expect(await page.locator('#badButton').getAttribute('class')).toMatch(/btn-success/);
// });

// test('checkbox and radio', async ({ page }) => {
//   await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');

//   await page.locator('[for=radio-1]').click();

//   await page.locator('[for=checkbox-4]').click();

//   await page.locator('[for=checkbox-nested-3]').click();

//   await page.locator('[for=checkbox-nested-4]').click();

//   await expect(page.locator('[for=radio-1]')).toHaveClass(/ui-checkboxradio-checked/);

//   await expect(page.locator('[for=checkbox-4]')).toHaveClass(/ui-checkboxradio-checked/);

//   await expect(page.locator('[for=checkbox-nested-3]')).toHaveClass(/ui-checkboxradio-checked/);

//   await expect(page.locator('[for=checkbox-nested-4]')).toHaveClass(/ui-checkboxradio-checked/);
// });

// test('auth test', async ({ page }) => {
//   await page.goto('http://uitestingplayground.com/sampleapp');

//   // >>>>> дополнить код здесь
//   const login = 'user12233';
//   const password = 'pwd';

//   await page.getByPlaceholder('User name').fill(login);
//   await page.getByPlaceholder('********').fill(password);

//   await page.locator('#login').click();
//   // <<<<<

//   await expect(page.locator('#loginstatus')).toHaveText(`Welcome, ${login}!`);
// });

// test('get image caption', async ({ page }) => {
//   await page.goto('http://the-internet.herokuapp.com/hovers');
//   // наша картинка, на которую наводим курсор и проверяем текст
//   const image = await page.locator('.figure').nth(1);

//   // >>>>> дополнить код здесь

//   await image.hover();

//   // <<<<<
//   await expect(image.locator('.figcaption h5')).toBeVisible();
// });

// test('checkboxes', async ({ page }) => {
//   await page.goto('http://the-internet.herokuapp.com/checkboxes');
//   const form = page.locator('#checkboxes input');
//   const cb1 = form.nth(0);
//   const cb2 = form.nth(1);

//   // >>>>> дополнить код здесь
//   await cb2.setChecked(false);

//   await cb1.setChecked(true);

//   // <<<<<

//   await expect(cb1).toBeChecked();
//   await expect(cb2).not.toBeChecked();
// });

// const fs = require('fs');

// test('скриншот всей страницы', async ({ page }) => {
//   await page.goto('http://uitestingplayground.com/sampleapp');

//   // >>>>> дополнить код здесь
//   await page.locator('body').screenshot({ path: 'body.png' });
//   await page.locator('section').screenshot({ path: 'container.png' });
//   // <<<<<

//   expect(fs.existsSync('body.png')).toBe(true);
//   expect(fs.existsSync('container.png')).toBe(true);
// });

// test('Проверяем, что 2+2 == 4', () => {
//   const actualValue = 2 + 2;

//   expect(actualValue, 'Неправильно посчитали').toEqual(4);
// });

// test('Проверяем, что строка содержит `Abc`', () => {
//   const string = 'Abc';

//   expect(string).toContain('Test Abc');
// });

// test('Проверяем, что длина (length) массива == 3', () => {
//   const array = [1, 2, 3];
//   expect(array).toHaveLength(3);
// });
