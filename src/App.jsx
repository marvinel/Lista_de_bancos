import { useEffect } from 'react'
import axios from 'axios'
import './App.css'


//REDUX
import { useSelector, useDispatch } from 'react-redux'
import {saveBanks} from './features/banks/banksSlice'



function App() {

  
 const banks = useSelector((state) => state.banks.listBanks)
 const dispatch = useDispatch()


 useEffect(()=>{
  const BANK_LIST_KEY = "bankList"
  const storedBankListJSON = localStorage.getItem(BANK_LIST_KEY)
  if(storedBankListJSON){
    const storedBankList = JSON.parse(storedBankListJSON)
    dispatch(saveBanks(storedBankList))

  }else{  

    axios.get('https://dev.obtenmas.com/catom/api/challenge/banks')
    .then(res => {
      dispatch(saveBanks(res.data))
    })
    .catch(err => {
      console.log(err)
    })
  }

 },[dispatch])

 
  return (
    < >
      <h1>Lista de Bancos</h1>
    <div  className='card-wrap'>
      {banks.length > 0 ?
        banks.map((bank, index) => (
          <div key={index} className="card2">
            <div  className="image">
              <img src={bank.url} alt="Imagen de la card" /> 
            </div>
            <div className="content">
              <div className="content-text">
                <h3 data-testid={bank.bankName} className='content-title'>{bank.bankName}</h3>
                <p className='content-age'>AGE: {bank.age}</p>
              </div>
              <div className="description">    
                <p>{bank.description}</p>
              </div>
            </div>
          </div>

        
        ))
        : <h2>No hay bancos disponibles</h2>
      }
        </div>
     
    </>
  )
}

export default App