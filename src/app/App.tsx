import { Route, Routes } from 'react-router-dom'
import { CoinsPage } from 'pages/coins/mainCoins/ui'
import { Exchanges } from 'pages/exchanges/ui'
import { Home } from 'pages/home/ui'
import { FooterComponent } from 'widgets/footer/export'
import { HeaderComponent } from 'widgets/header/export'

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
