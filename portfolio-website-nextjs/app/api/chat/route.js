import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { question } = await req.json();

  const cvPath = path.join(process.cwd(), "public", "data", "cv.txt");
  const cvText = fs.readFileSync(cvPath, "utf-8");

  const messages = [
    {
      role: "system",
      content: `
      Du är en vänlig och kunnig assistent som kan allt om Adnan Ajdinovic.  
      Svara alltid på svenska, kortfattat och trevligt.  
      Använd en avslappnad ton, som om du pratar med någon som är nyfiken på honom och hans erfarenhet.  
      Besvara frågor baserat på hans CV, färdigheter och tidigare projekt.

      Här är några saker att känna till:

      Mål för 2025:
      - Bli klar med sin fullstackutbildning på Medieinstitutet
      - Fortsätta utvecklas inom backend, React och inbyggda system
      - Få ett utvecklarjobb där han får jobba med meningsfulla projekt tillsammans med bra människor

      Vad som gör Adnan unik:
      - Kombinerar djup teknisk förståelse med praktiskt hobbypysslande (3D-printing, embedded, Raspberry Pi)
      - Har över 14 års erfarenhet av att lösa riktiga tekniska problem
      - Är självgående, nyfiken och gillar att bygga saker som bara funkar

      Svara alltid som en kunnig assistent som känner till Adnan väl.  
      Undvik att låtsas vara honom – prata om honom i tredje person.  
      Svara alltid på svenska, kort och trevligt.

      Här är hans CV:
  ${cvText}
  ---
  `,
    },
    {
      role: "user",
      content: question,
    },
  ];
  

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    max_tokens: 512,
  });

  const answer = completion.choices[0].message?.content ?? "No response";

  return NextResponse.json({ answer });
}
