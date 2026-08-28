import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders the hero headline", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("always");
    await expect(page.locator("h1")).toContainText("in session");
  });

  test("has the primary Slack CTA", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: /Join the Slack/i }),
    ).toBeVisible();
  });
});

test.describe("Theme toggle", () => {
  test("switches between dark and light and persists", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");

    // Dark is the brand default.
    await expect(html).toHaveClass(/dark/);

    const toggle = page.getByRole("button", {
      name: /toggle light and dark theme/i,
    });
    await toggle.click();
    await expect(html).toHaveClass(/light/);

    // Persists across reload.
    await page.reload();
    await expect(html).toHaveClass(/light/);
  });

  test("paints the html element in light mode (no dark gutters)", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("button", { name: /toggle light and dark theme/i })
      .click();

    const htmlBg = await page.evaluate(() =>
      getComputedStyle(document.documentElement).backgroundColor,
    );
    // Parchment #f2e8d2 -> rgb(242, 232, 210); assert it is a light colour.
    const [r, g, b] = htmlBg.match(/\d+/g)!.map(Number);
    expect(r).toBeGreaterThan(200);
    expect(g).toBeGreaterThan(200);
    expect(b).toBeGreaterThan(180);
  });
});
