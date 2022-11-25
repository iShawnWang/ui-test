import { test } from '@playwright/test';

new Array(1000).fill(null).forEach((__, i) => {
  test(`visit page: ${i}`, async ({ context }) => {
    await Promise.all(new Array(10).fill(null).map(async () => {
      const page = await context.newPage()
      await page.goto(<url>);
      await page.waitForTimeout(1000)
      await page.waitForLoadState('networkidle')
      await page.close()
    }))
    await context.close()
  });
})


