import { test, expect } from '@playwright/test';

test('eror', async ({ page }) => {
  await page.goto('https://rent-d24be.web.app/signin');
  await page.getByTestId('Email').click();
  await page.getByTestId('Email').fill('dias.tester4@gmal.com');
  await page.getByTestId('Password').click();
  await page.getByTestId('Password').fill('Qweasdzxcqw13d#');
  await page.getByTestId('sign-in').click();
  await page.getByTestId('select-company').click();
  await page.locator('div').filter({ hasText: /^diastest\.corp$/ }).nth(1).click();
  await page.getByTestId('submit').click();
  await page.getByText('diastest.corpЖіберуЖаңа компания ашуШығу').click({
    button: 'right'
  });
  await page.getByText('diastest.corpЖіберуЖаңа компания ашуШығу').click({
    button: 'right'
  });
});