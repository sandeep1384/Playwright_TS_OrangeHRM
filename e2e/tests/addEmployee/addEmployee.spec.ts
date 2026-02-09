import { test, expect } from '@playwright/test';
import { ENV } from '../../../config/env';

test('Add employee from PIM', async ({ page }) => {
  await page.goto(ENV.URL);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(ENV.USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(ENV.PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sandy');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('V');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('P');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText(/Successfully Saved/i).click();
  await expect(page.getByText(/Successfully Savedx/i)).toBeVisible();
});

