import { retornaArreglo } from '../base-pruebas/07-deses-arr'

describe('Prueba en desestructuracion', () => {
    test('Debe retornar un string y un numero', () => {

        const arr = retornaArreglo();

        expect( arr ).toEqual( ['ABC', 123] );
    })
})