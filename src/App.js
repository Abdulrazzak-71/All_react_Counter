import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import Counter from "./components/Counter/Counter";

function App() {
  const [themeDark, setThemeDark] = useState(false)
  const HandlesetTheme = () => {
    setThemeDark(!themeDark)
  }
  return (
    <div className={`${themeDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"} p-3 h-screen w-screen space-y-5 font-serif duration-500`}>
      <div className="absolute">
        <button
          onClick={HandlesetTheme}
          className={`w-20 h-8 flex items-center rounded-full p-2 transition-all duration-300 ${themeDark ? "bg-gray-700" : "bg-yellow-400"}`}
        >
          {
            themeDark ?
              <h1 className="absolute">Light</h1>
              :
              <h1 className="absolute left-9">Dark</h1>
          }
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center text-black ${themeDark ? "translate-x-11" : "-translate-x-1"}`}
          >
            {themeDark ? <Moon size={14} /> : <Sun size={14} />}
          </div>
        </button>
      </div>
      <div className=" relative top-10">
        <Counter themeDark={themeDark} />
      </div>
    </div>
  );
}

export default App;
