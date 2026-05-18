import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration File
 * Defines test execution settings and browsers
 */

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: false,

  retries: 0,

  workers: 3,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    
  },

  /**
   * Browser projects configuration
   * Each project runs tests on a different browser
   */
  projects: [

    /**
     * Chromium (Google Chrome)
     */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /**
     * Firefox browser
     */
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    /**
     * Mobile view (optional example)
     */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },

    /**
     * Microsoft Edge (optional)
     */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],
});