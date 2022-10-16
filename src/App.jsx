import { Datagrid, Header, Search} from './components/common'

function App() {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="container mx-auto px-0 pt-6 flex-1">
          
          <div className='content-home text-white'>
            <div>
            <Header />

            </div>
            
            
            <div>
              <h1 className='text-1xl md:text-2xl lg:text-3xl  uppercase'>
              Revolutionizing Space Technology
              </h1>
              <div className='pt-6 learn'>
              <a href="#">Learn more <i class="fa-solid fa-arrow-right"></i></a>
              </div>
              
            

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
