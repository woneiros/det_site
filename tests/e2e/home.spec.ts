import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders the hero headline and lead CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("always");
    await expect(page.locator("h1")).toContainText("in session");
    await expect(
      page.getByRole("link", { name: /Join the Slack/i }).first(),
    ).toBeVisible();
  });

  test("shows all six ways to plug in", async ({ page }) => {
    await page.goto("/");
    for (const name of [
      "Newsletter",
      "Blog",
      "Meetups & webinars",
      "Mentorship",
      "Resource hub",
      "Slack community",
    ]) {
      await expect(
        page.getByRole("heading", { name, exact: true }),
      ).toBeVisible();
    }
  });

  test("renders the community pulse feed and testimonials", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Latest from the community")).toBeVisible();
    await expect(page.getByText("Hear it from members")).toBeVisible();
  });
  test("shows authentic community photos, activity before offerings, and no overflow", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("img", { name: /Data engineers raising their hands/ })).toBeVisible();
    await expect(page.getByText("Shachar Meir", { exact: true })).toBeVisible();
    expect(await page.locator("#pulse").evaluate((element) =>
      Boolean(element.compareDocumentPosition(document.querySelector("#pillars")!) & Node.DOCUMENT_POSITION_FOLLOWING)
    )).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.locator('main a[href="#"]')).toHaveCount(0);
    await expect(page.locator("main")).not.toContainText("[placeholder");
  });

});

test.describe("Theme", () => {
  test("follows the OS colour scheme on first visit", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/light/);

    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("toggle overrides the OS scheme and persists across reloads", async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);

    await page
      .getByRole("button", { name: /toggle light and dark theme/i })
      .click();
    await expect(html).toHaveClass(/light/);

    await page.reload();
    await expect(html).toHaveClass(/light/);
  });

  test("paints <html> (not just <body>) so there are no dark gutters in light mode", async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    await page
      .getByRole("button", { name: /toggle light and dark theme/i })
      .click();
    await expect(page.locator("html")).toHaveClass(/light/);

    const htmlBg = await page.evaluate(
      () => getComputedStyle(document.documentElement).backgroundColor,
    );
    const [r, g, b] = htmlBg.match(/\d+/g)!.map(Number);
    expect(r).toBeGreaterThan(200);
    expect(g).toBeGreaterThan(200);
    expect(b).toBeGreaterThan(180);
  });
});
