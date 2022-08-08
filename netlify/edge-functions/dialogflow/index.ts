import { Base64 } from "https://deno.land/x/bb64@1.1.0/mod.ts"
import { message } from "./register.ts";

export default (request: Request, context: any) => {
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
    return new Response(JSON.stringify({ fulfillmentMessages: [{
      payload: {
        line: {
          type: "text",
          text: "กรุณาตอบคำถามต่อไปนี้นะคะ ชื่อจริง นามสกุล ชื่อเล่น เบอร์โทรศัพท์ที่ติดต่อได้ ที่อยู่ที่ติดต่อได้",
        },
      },
    }] }))
  } catch (e) {
    return new Response(e.message, { status: 500 })
  }
}
