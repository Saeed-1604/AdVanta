const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyBE1Z5efcqm02B3hTz9a44VI6agCs69FfM");

async function run() {
    const model = genAI.getGenerativeModel({ 
        model: "gemini-3-flash-preview"
    });
    
    const result = await model.generateContent("Write exactly: Hello from AdVanta");
    console.log(result.response.text());
}

run();