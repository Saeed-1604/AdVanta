const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyBE1Z5efcqm02B3hTz9a44VI6agCs69FfM");

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = "Say hello in Arabic";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log(text);
}

run();