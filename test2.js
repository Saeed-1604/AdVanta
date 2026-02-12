const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCUY8TAcznceqlyBC_rsbDwFrHGjMm_H_g");

async function run() {
    const model = genAI.getGenerativeModel({ 
        model: "gemini-3-flash-preview"
    });
    
    const result = await model.generateContent("Write exactly: Hello from AdVanta");
    console.log(result.response.text());
}

run();