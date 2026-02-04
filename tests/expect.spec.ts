import { test, expect } from '@playwright/test';

// test('check url', async ({ page }) => {
//   await page.goto('http://yandex.ru');
//   test.setTimeout(120_000);
//   await expect(page).toHaveURL('https://dzen.ru/?yredirect=true');
//   await expect(page).toHaveTitle(
//     'Дзен — главная новостная информационная платформа, которая помогает миллионам людей узнавать, что происходит в мире.',
//   );
// });

// test('check elements', async ({ page }) => {
//   await page.goto('https://inzhenerka.tech/playwright_stand');

//   await expect(page).toHaveTitle('Курсы обучения для инженеров и айтишников | ИнженеркаТех');

//   //   const description = await expect(page.locator('h2.tn-atom').first()).toHaveText(
//   //     'Делаем обучение интересным, сохраняя авторский подход, и помогаем специалистам повысить востребованность на рынке труда',
//   //   );

//   const description = await expect(page.locator('h1').first()).toContainText('айтишников');
// });

// test('counting', async ({ page }) => {
//   await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=120');

//   await expect(page.locator('li.data-gr4')).toHaveCount(120);
// });

const url = (c) => `https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=${c}`;

test('check elements count', async ({ page }) => {
  await page.goto(url(120));

  // >>>>> дополнить код здесь
  await expect(page.locator('li.s-item[data-gr4]')).toHaveCount(120);
  // <<<<<
});
