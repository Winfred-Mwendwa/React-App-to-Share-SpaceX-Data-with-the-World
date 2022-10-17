import { Header, Search, Fetch} from './components/common'

function App() {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="container mx-auto px-0 pt-6 flex-1 text-white">
          
          <div className='content-home'>
            <div>
            <Header />

            </div>
            
            
            <div>
              <h1 className='text-1xl md:text-2xl lg:text-3xl  uppercase'>
              Revolutionizing Space Technology
              </h1>
              <div className='pt-6 learn'>
              <a href="#">Learn more <i className="fa-solid fa-arrow-right"></i></a>
              </div>

            </div>
            
          </div>
          <div className='content-search grid gap-1 place-content-center justify-items-stretch'>
            <Search /></div>

          <div className='content-fetch text-black flex flex-wrap items-center justify-evenly'>

            <Fetch />

          </div> 
        </main>

      </div>
    
  )
}

export default App
