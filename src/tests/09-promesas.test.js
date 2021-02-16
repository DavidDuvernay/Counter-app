import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";
import heroes from "../data/heroes";
import { getHeroeById } from "../base-pruebas/08-imp-exp";

describe('Pruebas con promesas', () => {

    test('getherobyIdAsync debe de retornar un Heroe async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });

    test('debe obtener un error si el heroe por id no exste', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});