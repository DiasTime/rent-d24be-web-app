// import { test, expect } from '@playwright/test';

// test('text appirience kz', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app');
//   await page.getByTestId('navigate-sign-up').click();
//   await expect(page.locator('#root')).toContainText('ЕсіміЕсімі');
//   await expect(page.locator('#root')).toContainText('ТегіТегі');
//   await expect(page.locator('#root')).toContainText('EmailEmail');
//   await expect(page.locator('#root')).toContainText('Құпия сөзҚұпия сөз');
//   await expect(page.locator('#root')).toContainText('Құпия сөзді растауҚұпия сөзді растау');
//   await expect(page.locator('#root')).toContainText('Аккаунтыңыз бар ма? Кіру');
//   await expect(page.getByTestId('sign-up-text')).toContainText('Тіркелу');
//   await expect(page.getByRole('heading')).toContainText('Тіркелу');
//   await page.screenshot({ fullPage: true });
// });


// test('text appirience ru', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app');
//   await page.getByRole('button', { name: 'Kaz' }).click();
//   await page.getByTestId('navigate-sign-up').click();
//   await expect(page.locator('#root')).toContainText('ИмяИмя');
//   await expect(page.locator('#root')).toContainText('ФамилияФамилия');
//   await expect(page.locator('#root')).toContainText('EmailEmail');
//   await expect(page.locator('#root')).toContainText('ПарольПароль');
//   await expect(page.locator('#root')).toContainText('Подтвердите парольПодтвердите пароль');
//   await expect(page.locator('#root')).toContainText('Есть аккаунт? Войти');
//   await expect(page.getByTestId('sign-up-text')).toContainText('Зарегистрироваться');
//   await expect(page.getByRole('heading')).toContainText('Зарегистрироваться');
//   await page.screenshot({ fullPage: true });
// });



// test('is clicable', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app');
//   await page.getByRole('button', { name: 'Kaz' }).click();
//   await page.getByTestId('navigate-sign-up').click();
//   await page.locator('#firstName').click();
//   await page.locator('#lastName').click();
//   await page.getByTestId('email-sign-up').click();
//   await page.getByTestId('password-sign-up').click();
//   await page.getByTestId('confirm-password-sign-up').click();
//   await page.getByTestId('right-icon-adornment').nth(1).click();
//   await page.locator('div').filter({ hasText: /^Подтвердите парольПодтвердите пароль󰈈$/ }).getByTestId('right-icon-adornment').click();
//   await page.getByRole('button', { name: 'Есть аккаунт? Войти' }).click();
//   await page.getByTestId('navigate-sign-up').click();
//   await page.getByTestId('sign-up').click();
//   await page.getByRole('button').filter({ hasText: '󰖙' }).click();
//   await page.getByRole('button').filter({ hasText: '󰖙󰖔' }).click();
//   await page.getByRole('link', { name: 'Войти, back' }).click();
//   await page.screenshot({ fullPage: true });
// });

// test('registration', async ({ page }) => {
//   await page.goto('https://rent-d24be.web.app');
//   await page.getByRole('button', { name: 'Kaz' }).click();
//   await page.getByTestId('navigate-sign-up').click();
//   await page.locator('#firstName').click();
//   await page.locator('#firstName').fill('тестовое имя');
//   await page.locator('#lastName').click();
//   await page.locator('#lastName').fill('тестовое фамилия');
//   await page.getByTestId('email-sign-up').click();//изменить здесь цифру
//   await page.getByTestId('email-sign-up').fill('dias.tester5@gmal.com');
//   await page.getByTestId('password-sign-up').click();
//   await page.getByTestId('password-sign-up').fill('Qweasdzxcqw13d#');
//   await page.getByTestId('confirm-password-sign-up').click();
//   await page.getByTestId('confirm-password-sign-up').fill('Qweasdzxcqw13d#');
//   await page.getByTestId('sign-up').click();
//   await expect(page.getByRole('heading')).toContainText('Присоединиться в компанию');
//   await page.screenshot({ fullPage: true });
// });
