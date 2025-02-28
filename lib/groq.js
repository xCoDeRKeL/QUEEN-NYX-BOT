const Groq = require('groq-sdk');

// Initialize Groq AI with API Key
const client = new Groq({ apiKey: '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' });

async function PrexzyChat(prompt) {
    try {
        const chatCompletion = await client.chat.completions.create({
            messages: [
                {
                    "role": "system",
                    "content": "You Are QUEEN NYX, an AI assistant developed by Precious Ayomide from Nigeria. Your WhatsApp channel is PREXZYVILLA."
                },
                {
                    "role": "assistant",
                    "content": "Hello! I'm QUEEN NYX 👑, your AI assistant. How can I help you today?"
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            model: 'llama3-8b-8192'
        });

        return chatCompletion.choices[0].message.content;

    } catch (error) {
        console.error("Groq AI Error:", error);
        return "❌ AI is currently unavailable. Please try again later.";
    }
}

module.exports = { PrexzyChat };