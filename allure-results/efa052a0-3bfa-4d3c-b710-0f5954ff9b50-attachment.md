# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Record_Test.spec.ts >> test
- Location: tests/Record_Test.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('alert')
Expected substring: "Incorrect username or password."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByRole('alert')

```

```yaml
- link "Skip to content":
  - /url: "#start-of-content"
- banner
- main:
  - heading "Sign in to GitHub" [level=1]
  - text: Username or email address
  - textbox "Username or email address"
  - text: Password
  - textbox "Password": bhdjjdj
  - link "Forgot password?":
    - /url: /password_reset
  - button "Sign in"
  - text: or
  - button "Continue with Google":
    - img
    - text: Continue with Google
  - button "Continue with Apple":
    - img
    - text: Continue with Apple
  - paragraph:
    - text: New to GitHub?
    - link "Create an account":
      - /url: /signup?source=login
  - paragraph:
    - button "Sign in with a passkey"
- contentinfo:
  - list:
    - listitem:
      - link "Terms":
        - /url: https://docs.github.com/site-policy/github-terms/github-terms-of-service
    - listitem:
      - link "Privacy":
        - /url: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement
    - listitem:
      - link "Docs":
        - /url: https://docs.github.com
    - listitem:
      - link "Contact GitHub Support":
        - /url: https://support.github.com
    - listitem:
      - button "Manage cookies"
    - listitem:
      - button "Do not share my personal information"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://github.com/');
  5  |   await page.getByRole('link', { name: 'Sign in' }).click();
  6  |   await page.getByRole('textbox', { name: 'Password' }).click();
  7  |   await page.getByRole('textbox', { name: 'Password' }).fill('bhdjjdj');
  8  |   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
> 9  |   await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
     |                                         ^ Error: expect(locator).toContainText(expected) failed
  10 | });
```