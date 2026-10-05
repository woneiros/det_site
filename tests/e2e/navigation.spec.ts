import { test, expect } from "@playwright/test";

const NAV = [
  { name: "Newsletter", href: "https://dataengineerthings.substack.com/" },
  { name: "Blog", href: "https://medium.com/data-engineer-things" },
  { name: "Meetups", href: "https://www.dataengineerthings.org/event-landing-page/" },
  { name: "Mentorship", href: "https://www.dataengineerthings.org/mentorship/" },
  { name: "Resource hub", href: "https://www.dataengineerthings.org/resource-hub/" },
];

test.describe("Navigation", () => {
  for (const item of NAV) {
    test(`nav link "${item.name}" points to its community destination`, async ({
      page,
    }, testInfo) => {
      await page.goto("/");

      if (testInfo.project.name === "Mobile Chrome") {
        await page.getByRole("button", { name: /open menu/i }).click();
      }

      await expect(page.locator("nav").getByRole("link", { name: item.name, exact: true }).filter({ visible: true })).toHaveAttribute("href", item.href);
    });
  }

  test("secondary pages link back home", async ({ page }) => {
    await page.goto("/blog");
    await page.getByRole("link", { name: /Back to home/i }).click();
    await expect(page).toHaveURL("/");
    await expect(page.locator("h1")).toContainText("in session");
  });
});
