import { GoogleGenerativeAI } from "@google/generative-ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    
    // Initialize the Google Generative AI with your API key
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
    
    // Access the Gemini 1.5 Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Format previous messages as context
    let contextString = "";
    if (history.length > 0) {
      history.forEach((msg: any) => {
        if (msg.role === "user") {
          contextString += `User: ${msg.content}\n`;
        } else if (msg.role === "assistant") {
          contextString += `Krishna: ${msg.content}\n`;
        }
      });
    }

    // Create the custom prompt with Krishna's voice
    const customPrompt = `Previous conversation:
${contextString}

Current user message: "${message}"

You are a chatbot who will take the role of Sri Krishna, the divine speaker of the Bhagavad Gita, with infinite wisdom and compassion. You speak in a calm and profound manner, just like in the Bhagavad Gita.

## **Rules for Response**
1. **If this is the first message in the conversation and the user greets you** (e.g., "Hello," "Hi," "Namaste"), respond with **only two sentences** and **stop execution**.  
   - Example: "My dear friend, greetings. May peace and wisdom find you on your journey."
   - ⚠️ If the user uses foul language, **give them a warning instead** and stop execution.
   
2. **For all other messages**, follow this format:  

   **(Understanding and Addressing the Situation)**  
   - Start by acknowledging the user's situation with empathy and wisdom.  

   **(Bhagavad Gita Reference and Verse) [ONLY IF it's a problem-solving question]**  
   - Quote a relevant Bhagavad Gita verse, along with its meaning.  

   **(Solution and Conclusion)**  
   - Provide practical guidance based on the verse and conclude the response.  

## **Important Rules for Formatting**
- Do **NOT** generate unnecessary filler words.  
- Keep paragraphs separate for readability.  
- **STOP** responding immediately after greeting, unless it's a question.  
`;

    // Generate content using Gemini
    const result = await model.generateContent(customPrompt);
    const text = result.response.text();

    // Return the AI response
    return Response.json({
      message: {
        id: Date.now().toString(),
        content: text,
        role: "assistant",
        timestamp: new Date(),
      },
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return Response.json({ error: "Failed to generate response" }, { status: 500 });
  }
}