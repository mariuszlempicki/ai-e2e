import { test, expect } from '@playwright/test';

test('test', async ({ page , browserName}) => {

    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://www.doz.pl/');

    await page.getByRole('link', { name: 'Konto' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/logowanie');

    await page.getByLabel('Wpisz adres e-mail').click();

    await page.getByLabel('Wpisz adres e-mail').fill('mlempicki@doz.pl');

    await page.getByLabel('Wpisz adres e-mail').press('Tab');

    await page.getByLabel('Wpisz swoje hasło').fill('Mario007');

    await page.getByRole('button', { name: 'ZALOGUJ' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/moje-konto');

    await page.getByText('Witaj w Doz.pl');

    console.log(await page.video().path());

    await page.screenshot({ path: 'screen-doz-login-'+browserName+'.png', fullPage: true });



    await page.close();

});