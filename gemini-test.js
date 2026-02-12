const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCUY8TAcznceqlyBC_rsbDwFrHGjMm_H_g");

async function test() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
        const result = await model.generateContent("اكتب جملة واحدة عن مطعم برغر");
        console.log("✅ نجح!", result.response.text());
    } catch (e) {
        console.error("❌ فشل:", e.message);
    }
}
test();