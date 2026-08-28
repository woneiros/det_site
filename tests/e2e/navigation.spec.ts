import { test, expect } from "@playwright/test";

const NAV = [
  { name: "Newsletter", path: "/newsletter", heading: "The newsletter" },
  { name: "Blog", path: "/blog", heading: "The blog" },
  { name: "Meetups", path: "/meetups", heading: "Meetups & webinars" },
  { name: "Mentorship", path: "/mentorship", heading: "Mentorship" },
  { name: "Resource hub", path: "/resources", heading: "Resource hub" },
];

test.describe("Navigation", () => {
  for (const item of NAV) {
    test(`nav link "${item.name}" routes to ${item.path}`, async ({
      page,
    }, testInfo) => {
      await page.goto("/");

      if (testInfo.project.name === "Mobile Chrome") {
        await page.getByRole("button", { name: /open menu/i }).click();
      }

      await page
        .locator("nav")
        .getByRole("link", { name: item.name, exact: true })
        .filter({ visible: true })
        .click();

      await expect(page).toHaveURL(item.path);
      await expect(
        page.getByRole("heading", { level: 1, name: item.heading }),
      ).toBeVisible();
    });
  }

  test("secondary pages link back home", async ({ page }) => {
    await page.goto("/blog");
    await page.getByRole("link", { name: /Back to home/i }).click();
    await expect(page).toHaveURL("/");
    await expect(page.locator("h1")).toContainText("in session");
  });
});
