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
} from "./utils"

const searchYarns: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const browser = await getBrowser()

  console.log("launching browser")

  const args: [Browser, string] = [browser, event.body.searchTerm]

  const [eweKnit, knittingLoft, romni, knitomatic] = await Promise.all([
    searchEweKnit(...args),
    searchKnittingLoft(...args),
    searchRomni(...args),
    searchKnitomatic(...args),
  ])

  return formatJSONResponse({
    result: [
      { store: "eweKnit", yarns: eweKnit },
      { store: "knittingLoft", yarns: knittingLoft },
      { store: "romni", yarns: romni },
      { store: "knitomatic", yarns: knitomatic },
    ],
  })
}

export const main = middyfy(searchYarns)
