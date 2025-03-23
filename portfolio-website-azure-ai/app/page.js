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
        "Hi, I'm a friendly chatbot that knows Adnan's skills, experience and CV. Ask me anything!",
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
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:hej@adnan.nu" className="button">
                Contact Me
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
              <small>Hi I'm</small>
              Adnan Ajdinovic
            </h1>
            <p>
            a curious and hands-on fullstack developer based in Sweden.
            I love solving real-world problems – 
            I’ve been doing that in one way or another for over 14 years.
            </p>
            <br></br>
            <p>
            Whether it’s embedded hardware, access control systems, 
            or a full React app, I enjoy building things that just work.
            I also share what I learn through content and side projects,
            especially when it comes to AI and tools like ChatGPT.
            </p>
            <div className="call-to-action">
              <a
                href="./Adnan Ajdinovic - CV 2025.pdf"
                className="button black"
              >
                View Resume
              </a>
              <a href="mailto:hej@adnan.nu" className="button white">
                {" "}
                Contact Me{" "}
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Dinofix">
                <img src="./imgs/github.png" alt="GitHub" width="48" />
              </a>
              <a href="https://www.linkedin.com/in/adnan-a-9432061b6/">
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
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" alt="Sass" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/nextjs.png" alt="Next JS" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" alt="Sass" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img src="./imgs/nextjs.png" alt="Next JS" width="128" />
              <img src="./imgs/azure.png" alt="Azure" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP</li>
                <li>Ruby</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
              I’m currently studying fullstack development at Medieinstitutet
              and doing internships where I get to apply what I learn in real
              projects. My background is a mix of creative problem-solving and
              deep tech – from soldering and RFID to web APIs and React Native.
              </p>
              <p>
              I’ve worked in the security industry for over a decade, and
              I’ve recently transitioned into software. Thanks to my hands-on 
              experience and curiosity, I often bring ideas that blend both 
              hardware and code. I'm especially drawn to embedded projects,
              Raspberry Pi, 3D printing, and tools that make development smoother.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
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
                  <figcaption>Workplace - 1 YouTube Creator</figcaption>
                </div>
              </figure>
              <h3>YouTube Content Creator</h3>
              <div>2020-current</div>
              <p>
                Content creation online teaching people about how to code using
                HTML, CSS, JS.
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
                  <figcaption>Workplace - Moshi Moshi Marketing</figcaption>
                </div>
              </figure>
              <h3>Moshi Moshi Marketing</h3>
              <div>20018-2020</div>
              <p>
                Marketing agency building websites and programming them from the
                ground up.
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
                  <figcaption>Workplace - Chamber of Commerce</figcaption>
                </div>
              </figure>
              <h3>Chamber of Commerce</h3>
              <div>2013-2018</div>
              <p>
                A small to large business organisation that helps facilitate
                advice and support.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small> Previous </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./imgs/bento-1.jpg" alt="BGCCI" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-3.jpg" alt="Harley" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-5.jpg" alt="Bunbury" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-6.jpg" alt="Running" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-7.jpg" alt="School" width="100%" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small> Talk to me </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                I've put together a chatbot here which knows all my skills, work
                experience and has a copy of my CV/Resume. You can use it to ask
                questions about me to get a better idea of who I am and what
                I've done.
              </p>
              <p>
                You can also download my resume here if you want to take a look
                at it. I'm currently looking for new opportunities so if you
                have a project you think I'd be a good fit for, please get in
                touch!
              </p>
              <a
                href="./Adnan Ajdinovic - CV 2025.pdf"
                className="button black"
              >
                Download Resume
              </a>
            </div>
            <div className="chat-box">
            <div className="scroll-area" ref={scrollContainerRef}>
                <ul id="chat-log">
                  {chatLog.map((entry, idx) => (
                    <li key={idx}>
                      <span className={`avatar ${entry.role}`}>
                        {entry.role === "user" ? "You" : "AI"}
                      </span>
                      <div className="message">{entry.message}</div>
                    </li>
                  ))}
                  {loading && (
                    <li>
                      <span className="avatar bot">AI</span>
                      <div className="message">Typing...</div>
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
                  placeholder="Hey Adnan, what skills are you best at?"
                />
                <button
                  className="button black"
                  onClick={sendMessage}
                  disabled={loading}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
