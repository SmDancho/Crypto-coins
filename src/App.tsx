import { HeaderComponent } from '@componetns/header';

import { CoinsPage } from './pages/coins/mainCoins';
import { Home } from './pages/home';
import { FooterComponent } from '@componetns/footer';
import { Exchanges } from './pages/exchanges';


import { Routes, Route } from 'react-router-dom';

function App() {
  // const [theme, setTheme] = useState<String>("dark");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <div className="App ">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/Coins/*'} element={<CoinsPage />} />
        <Route path={'/Exchanges/*'} element={<Exchanges />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
