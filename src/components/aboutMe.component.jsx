import { useState, useRef, useEffect } from "react";

const AboutMe = () => {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (history.length > 0) {
      console.log(history);
      scrollToBottom();
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      let response = "";
      const cmd = inputValue.trim().toLowerCase();

      switch (cmd) {
        case "whoami":
          response = "I am Nguyen Phi Tuan An, a passionate website developer.";
          break;
        case "skills":
          response =
            "I mainly use ReactJS for frontend development and NodeJS for backend development. I also have experience with Express.js, Tailwind CSS, and MongoDB.";
          break;
        case "bio":
          response =
            "I have a strong background in web development and a passion for creating innovative solutions.";
          break;
        case "help":
          response =
            "Available commands:\nwhoami - Introduction about myself\nskills - My current skills\nbio - Display information about my bio\nclear - Clear the terminal\nhelp - Show this help message";
          break;
        case "clear":
          setHistory([]);
          setInputValue("");
          return;
        case "":
          setHistory([...history, { command: "", response: "" }]);
          return;
        default:
          response = `Command not found: ${cmd}.`;
      }
      setHistory([...history, { command: cmd, response }]);
      setInputValue("");
    }
  };

  return (
    <section
      id="about"
      className="h-screen snap-start pt-16 flex flex-col items-center justify-center gap-5"
    >
      <div className="flex">
        <div className="flex gap-2 items-center">
          <div className="border rounded-md px-1 border-emerald-300 text-emerald-300">01. </div>
          {"ABOUTME".split("").map((char, i) => (
            <kbd key={i} className={`kbd ${char === "T" ? "mr-3" : ""}`}>
              {char}
            </kbd>
          ))}
        </div>
        <div className="pl-3 hidden md:flex w-80 flex-col">
          <div className="divider"></div>
        </div>
      </div>

      <div
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
        className="mockup-code w-[370px] md:w-[700px] h-[700px] md:h-[400px] overflow-y-auto scroll-smooth bg-black/80"
      >
        <pre className="text-info">
          <code>WELCOME TO MY PORTFOLIO</code>
        </pre>
        <pre>
          <code>Type 'help' for available commands</code>
        </pre>

        {history.map((item, index) => (
          <div key={index} className="mt-1">
            {item.command && (
              <pre data-prefix="$" className="text-emerald-400">
                <code className="break-all">{item.command}</code>
              </pre>
            )}

            {item.response && (
              <div className="pl-8 pr-4 text-gray-300 font-mono text-sm leading-6 break-words whitespace-pre-wrap">
                {item.response}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center mt-2 pl-4">
          <span className="text-emerald-400 font-mono mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent outline-none flex-1 font-mono text-emerald-400 caret-emerald-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleCommand}
            spellCheck="false"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
