import Navbar from './components/Navbar'
import RouteHandler from './routes/RouteHandler'

function App() {

  return (
    <>
      <Navbar />
      <main className="h-dvh">
        <RouteHandler />
      </main>
    </>
  )
}

export default App
