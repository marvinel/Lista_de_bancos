import {describe, test, expect, beforeEach, vi} from 'vitest'
import {render, screen} from '@testing-library/react'
import store from './app/store.js'
import { Provider } from 'react-redux'
import App from './App'
import { useSelector } from 'react-redux';








describe('Lista de bancos', () =>{
    beforeEach(()=>{
        render( <Provider store={store}><App /></Provider>)
    })
    
    test('Verifica que el componente ha sido cargado', () => {    
        expect(screen.getByText('Lista de Bancos')).toBeDefined()
    })

    test('Verificar que el localStorage incialmente esta vacío', () => {  
        const banks = localStorage.getItem('bankList')
        expect(banks).toBeNull()
        
    })

    test('verifica la persistencia de los datos', () => {
        // Configura el localStorage con los datos que deseas testear
        const BanksList = [{
            description: "descripcion de prueba",
            age: 10,
            url: "https://urlejemplo.com",
            bankName: "Nombre de ejemplo"
          }]
          const bankListJSON = JSON.stringify(BanksList)
        window.localStorage.setItem('bankList',bankListJSON);
      
      
      
        // Verifica que los datos del localStorage son los esperados
        const miDato = window.localStorage.getItem('bankList');
        expect(miDato).toBe(bankListJSON);
      });


})