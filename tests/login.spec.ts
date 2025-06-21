// import { test, expect } from '@playwright/test';


// test('text appirience kz', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app/signin');
//   await expect(page.getByRole('heading')).toContainText('Кіру');
//   await expect(page.locator('#root')).toContainText('Kaz');
//   await expect(page.locator('#root')).toContainText('Электрондық поштаЭлектрондық пошта');
//   await expect(page.locator('#root')).toContainText('Құпия сөзҚұпия сөз');
//   await expect(page.locator('#root')).toContainText('Құпия сөзді ұмыттыңыз ба?');
//   await expect(page.getByTestId('navigate-sign-up-text')).toContainText('Тіркелу');
//   await expect(page.getByTestId('sign-in-text')).toContainText('Кіру');
//   await expect(page.locator('#root')).toContainText('v1.0.47');
// });

// test('text appirience ru', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app/signin');
//   await page.getByRole('button', { name: 'Kaz' }).click();
//   await expect(page.locator('#root')).toContainText('Rus');
//   await expect(page.getByRole('heading')).toContainText('Войти');
//   await expect(page.locator('#root')).toContainText('Электронная почтаЭлектронная почта');
//   await expect(page.locator('#root')).toContainText('ПарольПароль');
//   await expect(page.locator('#root')).toContainText('Забыли пароль?');
//   await expect(page.getByTestId('navigate-sign-up-text')).toContainText('Зарегистрироваться');
//   await expect(page.getByTestId('sign-in-text')).toContainText('Войти');
//   await expect(page.locator('#root')).toContainText('v1.0.47');
// });

// test('is clikable', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app/signin');
//   await page.getByRole('button', { name: 'Kaz' }).click();
//   await page.locator('.css-175oi2r.r-qklmqi').click();
//   await page.getByTestId('Email').click();
//   await page.getByTestId('Password').click();
//   await page.getByTestId('right-icon-adornment').click();
//   await page.getByRole('button', { name: 'Забыли пароль?' }).click();
//   await page.getByTestId('text-input-outlined').click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Восстановить' }).click();
//   await page.getByRole('link', { name: 'Войти, back' }).click();
//   await page.getByTestId('navigate-sign-up').click();
//   await page.getByRole('link', { name: 'Войти, back' }).click();
//   await page.getByTestId('icon-button').click();
//   await page.getByTestId('icon-button').click();
// });

// test('signin', async ({ page }) => {
//     await page.goto('https://rent-d24be.web.app/signin');
//     await page.getByRole('button', { name: 'Kaz' }).click();
//     await page.getByTestId('Email').click();
//     await page.getByTestId('Email').fill('dias.tester5@gmal.com');
//     await page.getByTestId('Password').click();
//     await page.getByTestId('Password').fill('Qweasdzxcqw13d#');
//     await page.getByTestId('sign-in').click();
//     await expect(page.getByRole('heading')).toContainText('Присоединиться в компанию');
//     await page.screenshot({ fullPage: true });

//   });

// test('invalid email', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app/signin');
//   await page.getByRole('button', { name: 'Kaz' }).click();
//   await page.getByTestId('Email').click();
//   await page.getByTestId('Email').fill('afAWFfw');
//   await page.getByTestId('Password').click();
//   await page.getByTestId('Password').fill('awfafawfwafawf');
//   page.once('dialog', async (dialog) => {
//     expect(dialog.message()).toBe('Недействительный адрес электронной почты');
//     await dialog.dismiss();
//   });
//   await page.getByTestId('sign-in').click();
//   await page.screenshot({ fullPage: true });

// });

