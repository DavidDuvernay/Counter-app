const { getHeroeById, getHeroesByOwner } = require("../base-pruebas/08-imp-exp");
const { default: heroes } = require("../data/heroes");


describe('Pruebas en funciones de Heroes', () => {

    test('Debe retornar un Heroe por ID', () => {

        const id = 1;

        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual( heroeData );
    });

    test('Debe retornar undefined si Heroe no existe', () => {

        const id = 10;

        const heroe = getHeroeById(id)

        expect( heroe ).toBe( undefined );
    });

    test('Evaluar heroes de DC', () => {

        const owner = 'DC';

        const heroe = getHeroesByOwner( owner );

        const heroeData = heroe.filter( h => h.owner === owner );

        expect(heroe).toEqual( heroeData );
    });

    test('Evaluar el length de los heroes de Marvel', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner )

        expect(heroes.length).toBe(2);
    })



})