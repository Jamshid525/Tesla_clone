import './App.css'
import MainComp from './companents/MainComp/MainComp'
import Navbar from './companents/navbar/Navbar'
import model3 from './assets/model3.jpg'
import modelS from './assets/modelS.jpg'
import modelY from './assets/modelY.jpg'
import modelX from './assets/modelX.jpg'
import solar from './assets/garaj.jpg'
import roof from './assets/solor.jpg'
import powerwall from './assets/powerwall.jpg'
import charging from './assets/Zaryadka.jpg'

function App() {
  
  const data = [
    {
      id : 1 ,
      image : model3 ,
      name: "Model 3",
      text: "From $29,740*",
      textp: "After Federal Tax Credit & Est. Gas Savings",
      button1: "OrderNow",
      button2: "Demo Drive"
    } ,
    {
      id : 2 ,
      image : modelY ,
      name: "Model Y",
      ext: "From $36,640*",
      textp: "After Federal Tax Credit & Est. Gas Savings",
      button1: "OrderNow",
      button2: "Demo Drive"
    },
    {
      id : 3 ,
      image : modelS ,
      name: "Model S",
      ext: "From $71,090*",
      textp: "After Est. Gas Savings",
      button1: "OrderNow",
      button2: "Demo Drive"
    },
    {
      id : 4 ,
      image : modelX ,
      name: "Model X",
      ext: "From $68,590*",
      textp: "After Federal Tax Credit & Est. Gas Savings",
      button1: "OrderNow",
      button2: "Demo Drive"
    },
    {
      id : 5,
      image : solar,
      name: "Solar Panels",
      text: "Schedule a Virtual Consultation",
      button1: "OrderNow",
  
    },
    {
      id : 6,
      image : roof,
      name: "Solar Roof",
      text: "Produce Clean Energy From Your Roof",
      button1: "OrderNow",
      button2: "Learn More"
    },
    {
      id : 7,
      image : powerwall,
      name: "Powerwall",
      button1: "OrderNow",
      button2: "Learn More"
  
    }
    ,
    {
      id : 8,
      image : charging,
      name: "Accessories",
      button1: "Shop Now"

  
    }
  ]

  return (
    <div className='app'>
      <Navbar />
      {
        data.map(item => (
          <MainComp item={item}/>,
          <MainComp item={item}/>,
          <MainComp item={item}/>,
          <MainComp item={item}/>,
          <MainComp item={item}/>,
          <MainComp item={item}/>,
          <MainComp item={item}/>,
          <MainComp item={item}/>
        ))
      }
    </div>
  )
}

export default App