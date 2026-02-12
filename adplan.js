const { GoogleGenerativeAI } = require("@google/generative-ai");
const ai = new GoogleGenerativeAI("AIzaSyCUY8TAcznceqlyBC_rsbDwFrHGjMm_H_g");

async function go(desc) {
    const model = ai.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const res = await model.generateContent(`Make ad plan JSON from: ${desc}`);
    console.log(res.response.text());
}

go("برجر, عائلة, خصم 20%");