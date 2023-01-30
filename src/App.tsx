import { HeaderComponent } from "./components/header";
import {useState,useEffect} from "react"
import { CoinsPage } from "./pages/coins/mainCoins";
import {Home} from "./pages/home";

import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";


function App() {

  const [theme, setTheme] = useState<String>('dark');


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="App ">
 
        <HeaderComponent />
        <Routes>
        <Route path={'/'} element={<Home/>} />
          <Route path={'/Coins/*'} element={<CoinsPage/>} />
        </Routes>

    </div>
  );
}

export default App;
