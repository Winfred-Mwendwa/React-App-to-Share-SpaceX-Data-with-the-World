import { Datagrid, Header, Home, Search } from './components/common'

function App() {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="container mx-auto px-0 pt-6 flex-1 text-center">
          
          <div className='content-home text-center text-white'>
            <Header />
            
            <div>
              <h1 className='text-1xl md:text-2xl lg:text-5xl pt-60 uppercase'>
              Revolutionizing Space Technology

            </h1>
            <h2 className='text-1xl md:text-2xl lg:text-3xl uppercase'>
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
