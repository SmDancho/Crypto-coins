import { Route, Routes } from 'react-router-dom'
import { CoinsPage } from 'pages/coins/mainCoins'
import { Exchanges } from 'pages/exchanges'
import { Home } from 'pages/home'
import { FooterComponent } from 'widgets/footer'
import { HeaderComponent } from 'widgets/header'

function App() {
  return (
    <div className="App ">
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path={'/Coins/*'}
          element={<CoinsPage />}
        />

        <Route
          path={'/Exchanges/*'}
          element={<Exchanges />}
        />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
