import { handlerPath } from "@libs/handler-resolver"

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  timeout: 30,
  events: [
    {
      httpApi: {
        method: "post",
        path: "/search",
      },
    },
  ],
}
