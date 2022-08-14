import { Context } from "netlify:edge"

import Dialogflow from "https://unpkg.com/@google-cloud/dialogflow@5.2.0/build/src/index.js"

export default async (request: Request, context: Context) => {
  const body = await request.json()
  return new Response(JSON.stringify(body), {
    status: 200,
  })
}
