const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCUY8TAcznceqlyBC_rsbDwFrHGjMm_H_g");

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = "Say hello in Arabic";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log(text);
}

run();