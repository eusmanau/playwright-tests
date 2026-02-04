import { test, expect } from '@playwright/test';

test('open the website and check elements', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/');

  await expect(page).toHaveURL(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  );
});
