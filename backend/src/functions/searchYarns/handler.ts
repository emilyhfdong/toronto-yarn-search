import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"
import { middyfy } from "@libs/lambda"
import { getBrowser } from "@libs/puppeteer"
import { Browser } from "puppeteer-core"

import schema from "./schema"
import {
  searchEweKnit,
  searchKnitomatic,
  searchKnittingLoft,
  searchRomni,
  YarnResult,
} from "./utils"

const searchYarns: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const browser = await getBrowser()

  console.log("launching browser")

  const args: [Browser, string] = [browser, event.body.searchTerm]

  const [eweknit, knittingLoft, romni, knitomatic] = await Promise.all([
    searchEweKnit(...args),
    searchKnittingLoft(...args),
    searchRomni(...args),
    searchKnitomatic(...args),
  ])

  const longestStore = Math.max(
    eweknit.length,
    knittingLoft.length,
    romni.length,
    knitomatic.length
  )

  const allYarns: YarnResult[] = new Array(longestStore)
    .fill(0)
    .reduce((acc, _, i) => {
      return [
        ...acc,
        ...(eweknit[i] ? [eweknit[i]] : []),
        ...(knittingLoft[i] ? [knittingLoft[i]] : []),
        ...(romni[i] ? [romni[i]] : []),
        ...(knitomatic[i] ? [knitomatic[i]] : []),
      ]
    }, [])

  return formatJSONResponse({
    result: allYarns,
  })
}

export const main = middyfy(searchYarns)
