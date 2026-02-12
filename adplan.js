const { GoogleGenerativeAI } = require("@google/generative-ai");
const ai = new GoogleGenerativeAI("AIzaSyBE1Z5efcqm02B3hTz9a44VI6agCs69FfM");

async function go(desc) {
    const model = ai.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const res = await model.generateContent(`Make ad plan JSON from: ${desc}`);
    console.log(res.response.text());
}

go("برجر, عائلة, خصم 20%");