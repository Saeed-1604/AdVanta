const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// نقطة النهاية لتوليد المحتوى
app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [{ text: prompt }]
                }]
            }
        );

        const text = response.data.candidates[0].content.parts[0].text;
        res.json({ result: text });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to generate content' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Backend running on port ${PORT}`);
});