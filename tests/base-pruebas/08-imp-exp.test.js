import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => { 
  test('getHeroeById debe retornar un héroe por ID', () =>{
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({id:1, name: 'Batman', owner: 'DC'});
  })

  test('getHeroeById debe undefined si no existe el ID', () =>{
    const id = 100;
    const hero = getHeroeById(id);
    
    expect(hero).toBeFalsy();
  })

  test('getHeroesByOwner deber retornar arreglo con heroes DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    console.log(heroes);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual( [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ] ); // esto podría cambiar, es mejor de la manera de abajo
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  })
  
  test('getHeroesByOwner deber retornar arreglo con heroes Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  })
 })