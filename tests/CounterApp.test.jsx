import { CounterApp } from "../src/CounterApp"

describe('pruebas del componente CounterApp', () =>{
    test('debe de retornar el valor por defecto de 100', () => {
        <CounterApp value={100}/>
    })
})