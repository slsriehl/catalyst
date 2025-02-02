import { expect, test } from '@playwright/test';

test('Changing selection on radio button options should update query parameters', async ({
  page,
}) => {
  await page.goto('/');

  await page
    .getByRole('navigation', { name: 'Main' })
    .getByRole('link', { name: 'Shop All' })
    .click();
  await page.getByRole('button', { name: 'Quick add' }).first().click();

  await page.getByLabel('Radio').getByText('1').click();

  await expect(page).toHaveURL('shop-all?134=139');

  await page.getByLabel('Radio').getByText('2').click();

  await expect(page).toHaveURL('shop-all?134=140');

  await page.getByLabel('Radio').getByText('3').click();

  await expect(page).toHaveURL('shop-all?134=141');
});
