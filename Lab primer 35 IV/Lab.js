function calcularDescuento() {
    const precioPorPrenda = 10; // Precio de cada prenda
    const descuentoPorcentaje = 0.75; 
    const cantidad = parseInt(document.getElementById("cantidad").value);
    let total;

    if (cantidad === 6 || cantidad === 12) {
        total = cantidad * precioPorPrenda * (1 - descuentoPorcentaje);
        document.getElementById("precioCalculado").value = total;
    } else {
        total = cantidad * precioPorPrenda;
        document.getElementById("precioCalculado").value = total;
    }
}