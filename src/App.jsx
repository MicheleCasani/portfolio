import MainPage from "./pages/MainPage"
import DefaultLayout from "./layout/DefaultLayout"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
