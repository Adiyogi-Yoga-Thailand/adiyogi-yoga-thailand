export default {
  start: `
    กรุณาตอบคำถามต่อไปนี้นะคะ\n
    \n
    ชื่อจริง\n
    นามสกุล\n
    ชื่อเล่น\n
    เบอร์โทรศัพท์ที่ติดต่อได้\n
    ที่อยู่ที่ติดต่อได้
  `,
  slotFilling: {
    type: "bubble",
    header: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "ข้อมูลถูกต้องหรือไม่?",
          align: "center",
          size: "lg",
          weight: "bold",
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "message",
            label: "แก้ไข",
            text: "แก้ไข",
          },
          style: "secondary",
        },
        {
          type: "button",
          action: {
            type: "message",
            label: "ถูกต้อง",
            text: "ถูกต้อง",
          },
          style: "primary",
        },
      ],
      spacing: "md",
    },
  },
}
