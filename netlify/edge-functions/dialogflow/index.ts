import { Base64 } from "https://deno.land/x/bb64@1.1.0/mod.ts"
import Register from "./messages/register.ts"

export default async (request: Request, context: any) => {
  if (request.method !== "POST") {
    return new Response("This API accepets only POST request.", {
      status: 400,
    })
  }

  const env = Deno.env.toObject()
  const basicAuth = `${env.AUTH_USERNAME}:${env.AUTH_PASSWORD}`
  const auth64 = `Basic ${Base64.fromString(basicAuth).toString()}`
  const header = new Headers(request.headers)
  if (header.get("authorization") !== auth64) {
    return new Response("Unauthorized.", { status: 403 })
  }

  try {
    const json = await request.json()
    const message = handleFulfillment(json) || {}
    return new Response(
      JSON.stringify({ fulfillmentMessages: [{ payload: { line: message } }] })
    )
  } catch (e) {
    return new Response(e.message, { status: 500 })
  }
}

function handleFulfillment(json: any): any {
  if (json.queryResult.action === "Register.Start") {
    return {
      type: "text",
      text: Register.start,
    }
  } else if (json.queryResult.action === "Register.SlotFilling") {
    return {
      type: "flex",
      altText: "Form checking",
      contents: Register.slotFilling,
    }
  }
}
