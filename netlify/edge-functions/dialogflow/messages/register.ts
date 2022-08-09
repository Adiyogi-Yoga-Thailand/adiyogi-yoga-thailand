export default {
  start: ["กรุณาตอบคำถามต่อไปนี้นะคะ", "กรุณาใส่ชื่อจริง เช่น ชุติมา"],
  slotFilling: {
    0: (
      firstname: string,
      lastname: string,
      nickname: string,
      telno: string,
      address: string
    ) =>
      `ข้อมูลการลงทะเบียน\n\nชื่อจริง : ${firstname}\nนามสกุล : ${lastname}\nชื่อเล่น : ${nickname}\nเบอร์โทรศัพท์ที่ติดต่อได้ : ${telno}\nที่อยู่ที่ติดต่อได้ : ${address}`,
    1: "ลงทะเบียนเรียบร้อยแล้ว กรุณาติดต่อแอดมินหากต้องการแก้ไขข้อมูล",
  },
}
