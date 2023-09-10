import model3 from '../../assets/model3.jpg'
import './main.css'

export default function MainComp({item}) {
    return (
        <div key={item.key} className="main" style={{background: `url(${item.image})` , backgroundSize: '100%' , backgroundPosition: '50%' , backgroundRepeat: 'no-repeat'}}>
             <div className="mainTexts">
                <h2>{item.name}</h2>
                <h4>{item.text}</h4>
                <p>{item.textp}</p>
             </div>
             <div className="mainBtns">
                <button>{item.button1}</button>
                <button>{item.button2} </button>
             </div>
        </div>
    )
}