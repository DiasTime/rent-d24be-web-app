import { test, expect } from '@playwright/test';

// test('create the company', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app/signin');
//   await page.getByTestId('Email').fill('dias.tester5@gmal.com');
//   await page.getByTestId('Password').click();
//   await page.getByTestId('Password').fill('Qweasdzxcqw13d#');
//   await page.getByTestId('sign-in').click();
//   await page.locator('.css-175oi2r.r-qklmqi').click({
//     button: 'right'
//   });
//   await page.getByRole('button').filter({ hasText: /^$/ }).first().click();
//   await page.getByRole('button', { name: 'Параметрлер' }).click();
//   await page.getByText('Русский').click();
//   await page.getByRole('radio').first().click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).first().click();
//   await page.getByRole('button', { name: 'Присоединиться в компанию' }).click();
//   await page.getByTestId('create-company').click();
//   await page.getByTestId('companyName').click();
//   await page.getByTestId('companyName').fill('diastest.corp');
//   await page.getByTestId('pickerButton').click();
//   await page.locator('div').filter({ hasText: /^hotel$/ }).nth(1).click();
//   await page.getByRole('button', { name: 'Сохранить' }).click();
// });


// test('joing company as operator', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app/signin');
//   await page.getByTestId('Email').click();
//   await page.getByTestId('Email').fill('dias.tester2@gmail.com');
//   await page.getByTestId('Password').click();
//   await page.getByTestId('Password').fill('Qweasdzxcqw13d#');
//   await page.getByTestId('sign-in').click();
//   await page.getByTestId('select-company').click();
//   await page.getByText('diastest.corp').click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByTestId('submit').click();
// });





test('joing company as perfomer', async ({ page }) => {
    await page.goto('https://rent-d24be.web.app/signin');
    await page.getByTestId('Email').click();
    await page.getByTestId('Email').fill('dias.tester4@gmal.com');
    await page.getByTestId('Password').click();
    await page.getByTestId('Password').fill('Qweasdzxcqw13d#');
    await page.getByTestId('sign-in').click();
    await page.getByTestId('select-company').click();
    await page.getByText('diastest.corp').click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByTestId('submit').click();
    await page.getByTestId('submit').click({ timeout: 10000 });
  });


test('accepting request as administrator', async ({ page }) => {
  await page.goto('https://rent-d24be.web.app/signin');
  await page.getByTestId('Email').click();
  await page.getByTestId('Email').fill('dias.tester5@gmal.com');
  await page.getByTestId('Password').click();
  await page.getByTestId('Password').fill('Qweasdzxcqw13d#');
  await page.getByTestId('sign-in').click();
  await page.getByRole('button').filter({ hasText: /^$/ }).first().click();
//   await page.getByRole('button', { name: 'Пользователи' }).click();
  await page.getByRole('button', { name: 'Пайдаланушылар' }).click();
  await page.getByRole('button', { name: 'Қабылдау' }).click();
  await page.getByTestId('icon-button').first().click();
  await page.locator('.css-175oi2r.r-1xfd6ze > .css-175oi2r.r-150rngu > div > div > div > div > div > div:nth-child(2)').first().click();
});

 