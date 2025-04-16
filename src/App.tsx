import "./App.css"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="flex min-h-screen bg-[url('/bg-forest.png')] bg-cover">
      <SideBar />
      <div className="flex-1 p-6 text-white">
        {/* Aqui vai o conteúdo das páginas */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
      </div>
    </div>
  )
}

export default App
