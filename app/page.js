"use client";
import { useState } from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [chatLog, setChatLog] = useState([
    {
      role: "bot",
      message:
        "Hej! Jag kan allt om Adnans CV och erfarenhet – vad vill du veta?",
    },
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newLog = [...chatLog, { role: "user", message: input }];
    setChatLog(newLog);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });

    const data = await res.json();
    setChatLog([...newLog, { role: "bot", message: data.answer }]);
    setLoading(false);
  };

  const scrollContainerRef = useRef(null);

  const scrollToBottom = () => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };  

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portföljsida</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Hem</a>
            </li>
            <li>
              <a href="#skills">Färdigheter</a>
            </li>
            <li>
              <a href="#projects">Projekt</a>
            </li>
            <li>
              <a href="mailto:hej@adnan.nu" className="button">
              Kontakta mig
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <h1>
              <small>Hej! Jag heter</small>
              Adnan
            </h1>
            <p>
            Jag är en nyfiken och praktiskt lagd utvecklare som
            gillar att bygga saker – både digitalt och fysiskt.
            Teknik och problemlösning har alltid varit min grej,
            och idag jobbar jag med fullstackutveckling där jag
            får kombinera kreativitet, logik och struktur.
            </p>
            <br />
            <p>
            Jag gillar att förstå hur saker funkar, och sen förbättra
            dem. Oavsett om det handlar om att bygga något nytt eller
            göra ett befintligt system smartare, så drivs jag av
            nyfikenhet och viljan att skapa något som faktiskt gör nytta.
            </p>

            <div className="call-to-action">
              <a
                href="./Adnan Ajdinovic - CV 2025.pdf"
                className="button black"
              >
                Visa CV
              </a>
              <a href="mailto:hej@adnan.nu" className="button white">
                {" "}
                Kontakta mig{" "}
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Dinofix" target="_blank">
                <img src="./imgs/github.png" alt="GitHub" width="48" />
              </a>
              <a href="https://www.linkedin.com/in/adnan-a-9432061b6/" target="_blank">
                <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
          <div className="hero-yellow">
            <img
              src="./imgs/hero-image.png"
              alt="Adnan Ajdinovic"
              width="100%"
            />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/typescript.png" alt="TS" width="128" />
              <img src="./imgs/sass.png" alt="Sass" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/C.png" alt="C" width="128" />
              <img src="./imgs/node.png" alt="Node" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/php.png" alt="PHP" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/typescript.png" alt="TS" width="128" />
              <img src="./imgs/sass.png" alt="Sass" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/C.png" alt="C" width="128" />
              <img src="./imgs/node.png" alt="Node" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/php.png" alt="PHP" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>Om Mig</small>
            Färdigheter
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>React Native</li>
                <li>WooCommerce</li>
                <li>Wordpress</li>
                <li>TypeScript</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>C</li>
                <li>PHP</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="right-column">
            <h3>Lite om mig</h3>
            <p>
            Jag har jobbat med allt från att bygga webbappar
            i React till att mecka med hårdvara på fritiden.
            Det kan vara allt från att laga trasig elektronik
            till att bygga egna lösningar med sensorer,
            mikrokontrollers och 3D-printade delar. 
            </p>
            <p>
            På mjukvarusidan har jag bl.a. jobbat med JavaScript,
            TypeScript, Node.js, PostgreSQL och Vite – och
            jag gillar när jag får saker att bara funka.
            Extra kul blir det när jag hittar smarta sätt
            att förenkla eller automatisera saker, gärna
            med hjälp av AI eller verktyg som ChatGPT.
            </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
          <small>Senaste</small>
          Vad jag jobbat med

          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-1.jpg"
                    alt="Workplace 1 - YouTube Creator"
                    width="100%"
                  />
                  <figcaption>FULLSTACK DEVELOPER (LIA)</figcaption>
                </div>
              </figure>
              <h3>FULLSTACK DEVELOPER (LIA)</h3>
              <div>2025-pågående</div>
              <p>
              På Consid är jag med och bygger ett bokningssystem för
              deras konferensrum, där vi jobbar med React Native,
              CI/CD och serverhantering.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-2.jpg"
                    alt="Workplace 2 - Moshi Moshi Marketing"
                    width="100%"
                  />
                  <figcaption>SENIOR SERVICETEKNIKER</figcaption>
                </div>
              </figure>
              <h3>SENIOR SERVICETEKNIKER</h3>
              <div>2013-pågående</div>
              <p>
              På Nexus har jag en bred roll där jag jobbar med kundsupport,
              service, logistik och utbildning – både på plats och på distans,
              med fokus på både hårdvara och mjukvara.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-3.jpg"
                    alt="Workplace 3 - Chamber of Commerce"
                    width="100%"
                  />
                  <figcaption>REPARATÖR / MODDARE</figcaption>
                </div>
              </figure>
              <h3>REPARATÖR / MODDARE</h3>
              <div>2010-pågående</div>
              <p>
              På fritiden reparerar och modifierar jag elektronik – allt från
              3D-design och utskrifter till att bygga om gamla konsoler och
              skapa egna kretskort, vilket låter mig kombinera teknik med kreativitet.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Tidigare</small>
            Avslutade projekt
          </h2>
          <div className="bento-grid">
            <a href="https://image-search-silk-delta.vercel.app" className="bento-item" target="_blank">
              <img src="./imgs/bento-1.jpg" alt="imageSearch app" width="100%" />
            </a>
            <a href="https://yogabadet.vercel.app/" className="bento-item" target="_blank">
              <img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
            </a>
            <a href="#" className="bento-item" target="_blank">
              <img src="./imgs/bento-7.jpg" alt="Harley" width="100%" />
            </a>
            <a href="#" className="bento-item" target="_blank">
              <img src="./imgs/bento-7.jpg" alt="Bunbury" width="100%" />
            </a>
            <a href="#" className="bento-item" target="_blank">
              <img src="./imgs/bento-7.jpg" alt="Running" width="100%" />
            </a>
            <a href="#" className="bento-item" target="_blank">
              <img src="./imgs/bento-7.jpg" alt="School" width="100%" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small> Prata med mig </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
            <h3>Chatbot byggd med AI</h3>
            <p>
              Här har jag satt ihop en chatbot som känner
              till mina färdigheter, erfarenheter och har
              tillgång till mitt CV. Du kan ställa frågor
              om mig för att få en bättre bild av vem jag
              är och vad jag har gjort.
            </p>
            <p>
              Du kan också ladda ner mitt CV här om du vill
              kika närmare. Jag letar just nu efter nya
              möjligheter – så om du har ett projekt där du
              tror att jag skulle passa, hör gärna av dig!
            </p>

              <a
                href="./Adnan Ajdinovic - CV 2025.pdf"
                className="button black"
              >
                Ladda ner CV
              </a>
            </div>
            <div className="chat-box">
            <div className="scroll-area" ref={scrollContainerRef}>
                <ul id="chat-log">
                  {chatLog.map((entry, idx) => (
                    <li key={idx}>
                      <span className={`avatar ${entry.role}`}>
                        {entry.role === "user" ? "Du" : "AI"}
                      </span>
                      <div className="message">{entry.message}</div>
                    </li>
                  ))}
                  {loading && (
                    <li>
                      <span className="avatar bot">AI</span>
                      <div className="message">Skriver...</div>
                    </li>
                  )}
                  
                </ul>
              </div>
              <div className="chat-message">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Skriv en fråga om Adnan"
                />
                <button
                  className="button black"
                  onClick={sendMessage}
                  disabled={loading}
                >
                  Skicka
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
