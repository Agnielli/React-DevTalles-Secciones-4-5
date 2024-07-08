describe('Pruebas en <DemoComponent />', () => {

  test('Esta prueba no debe fallar', () => {

    // inicialización
    const message1 = 'Hola Mundo';

    // estímulo
    const message2 = message1.trim();

    // observar el comportamiento esperado
    expect(message1).toBe(message2);

  })

})