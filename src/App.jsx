import { Datagrid, Header, Home, Search } from './components/common'

function App() {
    return (
      <div className="min-h-screen flex flex-col text-black">
        <main className="container mx-auto px-6 pt-16 flex-1">
          <Header />
          <Home />
          <Search />
          <Datagrid />

          
        </main>

        
        
      </div>
    
  )
}

export default App
