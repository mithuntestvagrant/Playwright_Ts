import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration File
 * Defines test execution settings and browsers
 */

import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, 'tests/.env') }); 
export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: false,

  retries: 0,

  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    
    
  trace: 'on',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
},

  /**
   * Browser projects configuration
   */
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },

    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],
});