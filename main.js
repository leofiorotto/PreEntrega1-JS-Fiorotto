function calcularCosto() {
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
  
   
    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
      alert("Por favor, ingrese una cantidad válida.");
      return;
    }
  
    let costoTotal = 0;
  
    for (let i = 1; i <= cantidadProductos; i++) {
      let precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i} :`));
  
      if (isNaN(precioProducto) || precioProducto < 0) {
        alert (`Por favor, ingrese un precio valido para el producto ${i}`)
        return;
      }
  
      costoTotal += precioProducto;
    }
  
    alert (`El costo total de los ${cantidadProductos} productos seleccionados es: $ ${costoTotal}`);
  }
  
  calcularCosto();
  