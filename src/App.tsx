import { Outlet } from "react-router-dom"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer/footer"

const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App