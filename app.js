const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyBE1Z5efcqm02B3hTz9a44VI6agCs69FfM");
async function test() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
        const result = await model.generateContent("Say hello");
        console.log(result.response.text());
    } catch (e) {
        console.log("Error:", e.message);
    }
}
test();
