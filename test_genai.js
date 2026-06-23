import { GoogleGenAI } from '@google/genai';

async function test() {
    try {
        const ai = new GoogleGenAI();
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: 'Translate to Spanish: O instrutor explica a tabela',
        });
        console.log("Success:", response.text);
    } catch (e) {
        console.error("Error:", e.message);
    }
}
test();
