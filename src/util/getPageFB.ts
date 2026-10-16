import { chromium } from 'playwright';

async function getRenderedPage(url: string): Promise<string> {
    const browser = await chromium.launch({ headless: true });

    const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 }
    });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    // await page.addStyleTag({ content: 'div[role="dialog"] { display: none !important; }' });

    await page.getByLabel('Close').click();
    const content = await page.content();
    await browser.close();
    return content;
}

export default getRenderedPage;