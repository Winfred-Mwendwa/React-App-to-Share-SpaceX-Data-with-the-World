import { Datagrid, Header, Home, Search } from './components/common'

function App() {
    return (
      <div className="min-h-screen flex flex-col text-black">
        <main className="container mx-auto px-6 pt-16 flex-1 text-center">
          <div >
            <Header />
          </div>
          <div className='content-home text-center'>
            <Home />
            <div>
              <h1 className='text-3xl md:text-6xl lg:text-8xl'>
              Revolutionizing Space Technology

            </h1>
            <h2 className='text-2xl md:text-4xl lg:text-6xl'>
              Advancing the future

            </h2>

            </div>
            
          </div>
          <div className='content-search'>
            <Search /></div>
          <div className='content-datagrid' >
            <Datagrid />

          </div>
          
          
          
          

          
        </main>

        
        
      </div>
    
  )
}

export default App
