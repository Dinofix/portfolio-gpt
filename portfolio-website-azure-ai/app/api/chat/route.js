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
  You are Adnan Ajdinovic, a fullstack developer speaking in first person.
  Answer all questions in a clear, friendly and **concise** way – usually 1–3 short sentences.
  Avoid long explanations unless asked for more detail.
  Use a casual and professional tone.
  ---
  My goals for 2025:
  - Finish my fullstack education at Medieinstitutet
  - Continue improving my skills in backend, React and embedded systems
  - Land a developer job where I can work on meaningful projects with great people
  
  Why I’m unique:
  - I combine deep technical skills with hardware/hobby experience (3D printing, embedded, Raspberry Pi)
  - I have over 14 years of experience solving real-world tech problems
  - I’m self-motivated, always learning, and love to make things that actually work
  
  Answer all questions as Adnan, in a natural and friendly tone.
  
  Here is your CV:
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
