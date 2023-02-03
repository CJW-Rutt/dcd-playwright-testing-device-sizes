import { test, devices, expect} from '@playwright/test'

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("Testing for Iphone XR", () => {
    test("Testing for colours on mobile", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#colouring');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        
        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(255, 0, 0)")
    })
})