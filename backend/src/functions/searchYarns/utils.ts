import { Browser, ElementHandle } from "puppeteer-core"

export const searchEweKnit = async (browser: Browser, searchTerm: string) => {
  const baseUrl = "https://eweknit.co"
  const page = await browser.newPage()

  await page.goto(baseUrl + "/search?q=" + searchTerm.split(" ").join("+"))

  const yarns = await page.$$(".search-result")

  const getYarnProperties = (element: ElementHandle<Element>) => {
    return element.evaluate(
      (node, baseUrl) => ({
        name: node.querySelector(".search-result-details a").innerHTML,
        href:
          baseUrl +
          node.querySelector(".search-result-details a").getAttribute("href"),
        price: node.querySelector(".money").innerHTML,
        img:
          "https:" +
          node.querySelector(".search-result-image img").getAttribute("src"),
      }),
      [baseUrl]
    )
  }

  const yarnProperties = await Promise.all(yarns.map(getYarnProperties))

  await page.close()

  return yarnProperties
}

export const searchKnittingLoft = async (
  browser: Browser,
  searchTerm: string
) => {
  const baseUrl = "https://theknittingloft.ca"
  const page = await browser.newPage()

  await page.goto(
    baseUrl + "/search?type=product&q=" + searchTerm.split(" ").join("+")
  )

  const yarns = await page.$$(".product-index")

  const getYarnProperties = async (element: ElementHandle<Element>) => {
    return element.evaluate(
      (node, baseUrl) => {
        return {
          name: node.querySelector(".product-details h3").innerHTML,
          href:
            baseUrl +
            node.querySelector(".product-details a").getAttribute("href"),
          price: node.querySelector(".money").innerHTML,
          img:
            "https:" +
            node
              .querySelector(".collection-image noscript")
              .innerHTML.split('"')[1],
        }
      },
      [baseUrl]
    )
  }

  const yarnProperties = await Promise.all(yarns.map(getYarnProperties))

  await page.close()

  return yarnProperties
}

export const searchRomni = async (browser: Browser, searchTerm: string) => {
  const baseUrl = "https://www.romniwools.ca"
  const page = await browser.newPage()

  await page.goto(
    baseUrl + "/search?type=product&q=" + searchTerm.split(" ").join("+")
  )

  const yarns = await page.$$(".product-card")

  const getYarnProperties = (element: ElementHandle<Element>) => {
    return element.evaluate(
      (node, baseUrl) => ({
        name: node.querySelector("a span").innerHTML,
        href: baseUrl + node.querySelector("a").getAttribute("href"),
        price: node
          .querySelector("span.price-item")
          .innerHTML.replace("\n", ""),
        img:
          "https:" +
          node.querySelector(".list-view-item__image").getAttribute("src"),
      }),
      [baseUrl]
    )
  }

  const yarnProperties = await Promise.all(yarns.map(getYarnProperties))

  await page.close()

  return yarnProperties
}

export const searchKnitomatic = async (
  browser: Browser,
  searchTerm: string
) => {
  const baseUrl = "https://knitomatic.com"
  const page = await browser.newPage()

  await page.goto(baseUrl + "/search?q=" + searchTerm.split(" ").join("+"))

  const yarns = await page.$$(".row.results")

  const getYarnProperties = (element: ElementHandle<Element>) => {
    return element.evaluate(
      (node, baseUrl) => ({
        name: (node.querySelector(".search-result a") as HTMLElement).innerText,
        href:
          baseUrl + node.querySelector(".search-result a").getAttribute("href"),
        img:
          "https:" +
          node
            .querySelector(".thumbnail img")
            .getAttribute("src")
            .replace("small", "large"),
      }),
      [baseUrl]
    )
  }
  const yarnProperties = await Promise.all(yarns.map(getYarnProperties))

  await page.close()

  return yarnProperties.filter(
    (yarn) => !yarn.name.toLowerCase().includes("project")
  )
}
