// PRODUCTOS //
class Producto { 
    constructor (marca, variedad, precio) { 
        this.marca = marca
        this.variedad = variedad
        this.precio = precio
    }
}

// CREO OBJETO PRODUCTOS
let producto_uno = new Producto ('Café Martinez', 'Suave', 680)
let producto_dos = new Producto ('Café Martinez', 'Selecto', 1300)
let producto_tres = new Producto ('Café Martinez', 'Italiano', 1150)
let producto_cuatro = new Producto ('Café Martinez', 'Colombia', 900)


// ARRAYS PARA GUARDAR LOS PRODUCTOS CREADOS
let array_productos= []
//AGREGO LOS PRODUCTOS AL ARRAYS
array_productos.push (producto_uno)
array_productos.push (producto_dos)
array_productos.push (producto_tres)
array_productos.push (producto_cuatro)


function comprar () {
let mensajeCompra = prompt ('¿Qué producto deseas comprar?' + '\n' +
    '1) Café Martinez Suave' + '\n' + 
    '2) Café Martinez Selecto' + '\n' +  
    '3) Café Martinez Italiano' + '\n' +  
    '4) Café Martinez Colombia' + '\n') 

    if (mensajeCompra == 1) {
        resultado = array_productos.find ((e) =>  
            e.variedad === 'Suave'
        ) 
    } else if (mensajeCompra == 2) { 
        resultado = array_productos.find ((e) =>  
            e.variedad === 'Selecto'
        ) 
        } else if (mensajeCompra == 3) { 
        resultado = array_productos.find ((e) =>  
            e.variedad === 'Italiano'
        )
    } else if (mensajeCompra == 4) { 
        resultado = array_productos.find ((e) =>  
            e.variedad === 'Colombia'
        ) 
    } else {alert ('Ingrese una opción correcta')
    comprar()}

    precioProductoSeleccionado = (resultado.precio)
}     



// VARIABLES PARA CALCULAR PRECIO //
let iva = 21/100;
let cuponDescuento = ['A010','B035', 'C020', 'D010', 'E05', 'F030', 'M025', 'Z040']
let descuento = 0
let costoEnvio = 0

// OBJETO SEGUN PROVINCIA: PARA CALCULAR FLETE
const norte = { 
    provincia: ["Jujuy", "Salta", "Formosa", "Catamarca", "Tucuman", "Chaco", "Misiones", "Santiago del Estero", "La Rioja", "San Juan", "Mendoza"],
    costo: 850
}

const centro = {
    provincia: ["Santa Fe", "Corrientes", "Entre Rios", "Cordoba", "Buenos Aires", "CABA"],
    costo: 650
}

const sur = {
    provincia: ["La Pampa", " Neuquen", "Rio Negro", "Chubut", "Santa Cruz", "Tierra del Fuego"],
    costo: 1200
}

function precioProducto () { 
    let mensaje = prompt ("¿Tienes cupón de descuento?")
// Preguntamos si tiene cupon de descuento. De ser SI se pide codigo  
    if (mensaje == "si" || mensaje == "SI" || mensaje == "Si") { 
// Si ingresa código correcto se aplica un 5% sobre precio neto
        let cupon = prompt ("Ingrese código") 
            if (cuponDescuento.includes(cupon)) {
                alert ('Se aplicó el descuento del 5% de manera exitosa')
                descuento = (5/100) * precioProductoSeleccionado
            } else { 
            alert ('El cupón ingresado es invalido')
            }
        } else { 
        descuento = 0
        }

// Preguntamos hacia donde va el producto, dado que según la provincia el costo de envío es diferente
        function flete() {
            let envio = prompt ("Ingrese su Provincia")
            
            for (i=0; i < norte.provincia.length; i++) { 
                
                if (envio == norte.provincia[i]) { 
                    console.log ("El costo de envío es de $ " + norte.costo)
                    costoEnvio = norte.costo
                    return
                } else if (envio == centro.provincia[i]) { 
                    console.log ("El costo de envío es de $ " + centro.costo)
                    costoEnvio = centro.costo
                    return
                } else if  (envio == sur.provincia[i]) { 
                    console.log ("El costo de envío es de $ " + sur.costo)
                    costoEnvio = sur.costo
                    return
                } 
            } alert ("Ingrese provincia correcta")
            
        }flete ()


// Calculamos el precio final que deberá abonar
   let precioFinal = ((precioProductoSeleccionado - descuento) * (1 + iva)) +costoEnvio

   alert ("Vas a pagar:" + '\n' + 
    'Producto $' + precioProductoSeleccionado + '\n' + 
    'Descuento - $' + descuento + '\n' +
    'IVA $' + ((precioProductoSeleccionado - descuento) * (iva)).toFixed(2) + '\n' + 
    'Envío $' + costoEnvio + '\n' + 
    'TOTAL $' + precioFinal.toFixed(2))
}


comprar ()
console.log (precioProductoSeleccionado)
precioProducto()


