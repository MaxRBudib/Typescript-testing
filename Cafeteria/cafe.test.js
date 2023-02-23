const agregar_nueva_bebida = require('./cafe')

test('Si la bebida mango es correcta', () => {
    const nombre = "Mango, 5, 10, 15, 20, 25"
    expect(agregar_nueva_bebida(nombre)).toBe(nombre)
})

test('Si una bebida solo tiene un tamaño', () => {
    const nombre = "Fanta, 15"
    expect(agregar_nueva_bebida(nombre)).toBe(nombre)
})

test('Tamaño muy pequeño', () => {
    const nombre = "Sprite, 0"
    expect(agregar_nueva_bebida(nombre)).toBe("Tamaño: '0' no es valido")
})

test ('Nombre muy largo', () => {
    const nombre = "Bebida legendariamente deliciosa, 1, 4"
    expect(agregar_nueva_bebida(nombre)).toBe("Nombre: 'Bebida legendariamente deliciosa' no es valido")
})

test ('Nombre muy corto', () => {
    const nombre = "a, 1, 4"
    expect(agregar_nueva_bebida(nombre)).toBe("Nombre: 'a' no es valido")
})

test ('Sin tamaño', () => {
    const nombre = "Sprite"
    expect(agregar_nueva_bebida(nombre)).toBe("No se insertó un tamaño")
})

test ('Sin tamaño', () => {
    const nombre = "Sprite"
    expect(agregar_nueva_bebida(nombre)).toBe("No se insertó un tamaño")
})

test ('Demasiados tamaños', () => {
    const nombre = "Sprite, 1, 2, 3, 4, 5, 6"
    expect(agregar_nueva_bebida(nombre)).toBe("Demasiados tamaños")
})

test ('Sin entrada', () => {
    const nombre = ""
    expect(agregar_nueva_bebida(nombre)).toBe("No se insertó un tamaño")
})

test ('Tamaño decimal', () => {
    const nombre = "Sprite, 1, 5, 5.5"
    expect(agregar_nueva_bebida(nombre)).toBe("Tamaño: '5.5' no se puede usar")
})

test ('Letra u otro caracter en vez de numero', () => {
    const nombre = "Sprite, a, 5, 6"
    expect(agregar_nueva_bebida(nombre)).toBe("Tamaño: 'a' no se puede usar")
})

test ('Numeros no están en orden', () => {
    const nombre = "Sprite, 20, 15, 10, 5, 3"
    expect(agregar_nueva_bebida(nombre)).toBe("Orden de los tamaños es incorrecto")
})
