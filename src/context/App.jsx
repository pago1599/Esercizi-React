import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Hello } from "./Hello";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <div className="flex flex-col items-center gap-2 ">
      <div className="flex gap-2">
        <button
          className="bg-gray-300 border-2 border-gray-500 p-2"
          onClick={() => handleSetLanguage("it")}
        >
          IT
        </button>
        <button
          className="bg-gray-300 border-2 border-gray-500 p-2"
          onClick={() => handleSetLanguage("en")}
        >
          EN
        </button>
      </div>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
