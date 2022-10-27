import { test, expect } from '@playwright/test';

test('DOZ.PL: Zamówienie produktu z odbiorem w aptece', async ({ page, browserName}) => {

    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://www.doz.pl/');

    await page.getByPlaceholder('Zacznij szukać').click();

    await page.getByPlaceholder('Zacznij szukać').fill('apap');

    await page.getByPlaceholder('Zacznij szukać').press('Enter');
    await expect(page).toHaveURL('https://www.doz.pl/apteka/szukaj?search=apap');

    await page.getByRole('link', { name: 'Dodaj do koszyka produkt Apap, 500 mg, tabletki powlekane, 100 szt.' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/apteka/szukaj?search=apap');

    await page.getByRole('link', { name: 'sdsKoszyk 1' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/koszyk');

    await page.getByRole('link', { name: 'Dostawa i płatności' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/logowanie?redirect=/koszyk/dostawa');

    await page.getByLabel('Wpisz adres e-mail').click();

    await page.getByLabel('Wpisz adres e-mail').fill('mlempicki@doz.pl');

    await page.getByLabel('Wpisz swoje hasło').click();

    await page.getByLabel('Wpisz swoje hasło').fill('Mario007');

    await page.getByRole('button', { name: 'ZALOGUJ' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/koszyk/dostawa');

    await page.getByRole('button', { name: 'WYBIERAM' }).first().click();

    await page.getByRole('button', { name: 'Dalej - weryfikacja' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/koszyk/podsumowanie-i-weryfikacja');

    await page.getByRole('link', { name: 'Złóż zamówienie' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/koszyk/potwierdzenie');

    console.log(await page.video().path());

    await page.screenshot({ path: 'screen-doz-search-add-and-order-'+browserName+'.png', fullPage: true });

    await page.close();

});
