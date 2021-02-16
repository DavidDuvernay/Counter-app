import '@testing-library/jest-dom';
import { getSaludo } from '../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {
    test('Prueba en metodo getSaludo', () => {

        const nombre = 'David';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre);
    });

    //getSaludo debe retornar Hola David si no hay argumento en el nombre
    test('Prueba con valor predefinido', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola David');
    });

});