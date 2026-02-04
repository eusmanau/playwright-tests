import { test, expect } from '@playwright/test';

const elements = [
  {
    name: 'Playwright logo',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('link', { name: 'Playwright logo Playwright' }),
  },
  {
    name: 'Docs link',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('link', { name: 'Docs' }),
  },
  {
    name: 'API link',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('link', { name: 'API' }),
  },
  {
    name: 'Community link',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('link', { name: 'Community' }),
  },
  {
    name: 'GitHub link',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('link', { name: 'GitHub repository' }),
  },
  {
    name: 'Discord link',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('link', { name: 'Discord server' }),
  },
  {
    name: 'Theme switcher',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('button', { name: 'Switch between dark and light' }),
  },
  {
    name: 'Search button',
    locator: (page: { getByRole: (arg0: string, arg1: { name: string }) => any }) =>
      page.getByRole('button', { name: 'Search (Ctrl+K)' }),
  },
];

test.describe('tests for the main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('check elements on the page', async ({ page }) => {
    for (const element of elements) {
      await test.step(`check element: ${element.name}`, async () => {
        const locator = element.locator(page);
        await expect(locator).toBeVisible();
      });
    }
  });

  test('attribute check', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
      'href',
      '/docs/api/class-playwright',
    );
    await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
      'href',
      '/community/welcome',
    );
  });

  test('change theme', async ({ page }) => {
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('check Get started link', async ({ page }) => {
    const getStartedLink = page.getByRole('link', { name: 'Get started' });

    // Проверяем видимость (soft assert)
    await expect.soft(getStartedLink).toBeVisible();

    // Проверяем атрибут href
    await expect(getStartedLink).toHaveAttribute('href', '/docs/intro');
  });
});
