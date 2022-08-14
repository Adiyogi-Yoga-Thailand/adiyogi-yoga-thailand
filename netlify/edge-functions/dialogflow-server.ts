import { Context } from "netlify:edge"

import dialogflow from "@google-cloud/dialogflow"

export default async (request: Request, context: Context) => {
  const body = await request.json()
  return new Response(body.toString(), {
    status: 200,
  })
}