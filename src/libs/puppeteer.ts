import chromium from "chrome-aws-lambda"

let browser

export const getBrowser = async () => {
  if (browser) {
    return browser
  }
  browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  })
  return browser
}
