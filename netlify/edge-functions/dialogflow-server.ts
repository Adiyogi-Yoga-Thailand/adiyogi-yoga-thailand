import { Context } from "netlify:edge"

import dialogflow from "https://esm.sh/@google-cloud/dialogflow@5.2.0"

export default async (request: Request, context: Context) => {
  const body = await request.json()
  return new Response(JSON.stringify(body), {
    status: 200,
  })
}