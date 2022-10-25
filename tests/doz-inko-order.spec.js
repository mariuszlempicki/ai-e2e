import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

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

    await page.goto('https://www.doz.pl/inkontynencja');

    await page.locator('label:has-text("Styczeń")').click();

    await page.locator('label:has-text("PIELUCHOMAJTKI")').click();

    await page.getByRole('link', { name: 'Dodaj do koszyka produkt Super Seni Plus, pieluchomajtki dla dorosłych, large, 10 szt.' }).click();

    await page.getByRole('button', { name: 'Dalej' }).click();
    await expect(page).toHaveURL('https://www.doz.pl/inkontynencja/zamowienie');

    await page.locator('label:has-text("Wyrażam zgodę na udostępnienie przez DOZ.pl sp. z o.o. moich danych do logowania")').click();

    await page.getByText('Wyrażam zgodę na udostępnienie przez DOZ.pl sp. z o.o. do Spółki prowadzącej Apt').click();

    await page.getByLabel('Akceptuję treść Regulaminu\n            apteki wysyłkowej.').check();

    await page.getByRole('link', { name: 'Zamawiam w dozapteka.pl' }).click();
    await expect(page).toHaveURL('https://www.dozapteka.pl/inkontynencja/zamowienie');

    await page.getByLabel('Numer zlecenia NFZ*').click();

    await page.getByLabel('Numer zlecenia NFZ*').fill('1-22-000368488-5');

    await page.getByRole('textbox', { name: 'PESEL*' }).click();

    await page.getByRole('textbox', { name: 'PESEL*' }).fill('81112513552');

    await page.locator('input[name="principal_contact"]').click();

    await page.locator('input[name="principal_contact"]').fill('222333444');

    await page.getByRole('textbox', { name: 'Imię*' }).click();

    await page.getByRole('textbox', { name: 'Imię*' }).fill('Mariusz');

    await page.getByRole('textbox', { name: 'Imię*' }).press('Tab');

    await page.getByRole('textbox', { name: 'Nazwisko*' }).fill('Łempicki');

    await page.getByRole('button', { name: 'Dalej' }).click();
    await expect(page).toHaveURL('https://www.dozapteka.pl/inkontynencja/zamowienie');

    await page.getByText('Błąd. Formularz nie został wypełniony prawidłowo. Sprawdź pola oznaczone na czer').click();

    await page.getByLabel('Wpisz imię*').click();

    await page.getByLabel('Wpisz imię*').fill('Jan');

    await page.getByLabel('Wpisz imię*').press('Tab');

    await page.getByLabel('Wpisz nazwisko*').fill('Kowalski');

    await page.getByLabel('Wpisz nazwisko*').press('Tab');

    await page.locator('section:has-text("Wpisz imię*To pole jest wymagane Wpisz nazwisko*To pole jest wymagane Telefon ko")').getByLabel('Telefon kontaktowy*').press('Tab');

    await page.getByLabel('Adres e-mail*').press('Tab');

    await page.getByLabel('Miejscowość*').click();

    await page.getByLabel('Miejscowość*').fill('Warszawa');

    await page.locator('section:has-text("Wpisz imię*To pole jest wymagane Wpisz nazwisko*To pole jest wymagane Telefon ko")').getByLabel('Telefon kontaktowy*').click();

    await page.locator('section:has-text("Wpisz imię*To pole jest wymagane Wpisz nazwisko*To pole jest wymagane Telefon ko")').getByLabel('Telefon kontaktowy*').fill('222333444');

    await page.getByLabel('Adres e-mail*').click();

    await page.getByLabel('Adres e-mail*').fill('mlempicki@doz.pl');

    await page.getByLabel('Kod pocztowy*').click();

    await page.getByLabel('Kod pocztowy*').fill('01-910');

    await page.getByLabel('Ulica*').click();

    await page.getByLabel('Ulica*').fill('Ciemna');

    await page.getByLabel('Nr domu*').click();

    await page.getByLabel('Nr domu*').fill('24');

    await page.getByRole('button', { name: 'Dalej' }).click();
    await expect(page).toHaveURL('https://www.dozapteka.pl/inkontynencja/podsumowanie');

    await page.getByRole('button', { name: 'Zamawiam i płacę' }).click();
    await expect(page).toHaveURL('https://www.dozapteka.pl/inkontynencja/potwierdzenie');

    console.log(await page.video().path());

    await page.screenshot({ path: 'screen-doz-search-add-and-order-'+browserName+'.png', fullPage: true });

    await page.close();
});