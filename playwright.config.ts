import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment file
if (process.env.Environment) {
  console.log(`Running tests in ${process.env.Environment} environment`);
  dotenv.config({
    path: `.env.${process.env.Environment}`,
    override: true,
  });
} else {
  dotenv.config();
}

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
