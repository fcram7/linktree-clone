import Navbar from './components/Navbar'
import RouteHandler from './routes/RouteHandler'

function App() {

  return (
    <>
      <Navbar />
      <main className="h-full bg-amber-100">
        <RouteHandler />
      </main>
    </>
  )
}

export default App
