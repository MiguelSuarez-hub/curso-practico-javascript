const cupones = [
    {name: "BLACKFRIDAY",
     discount: 15,
    },
    {name: "BIRTHDAY",
     discount: 20,
    },
    {name: "Fastpass",
     discount: 30,
    },
];
function calcularValorDescuento () {
    const input1 = document.getElementById("precio");
    const input2 = document.getElementById("cupon");
    const precio = Number(input1.value);
    const cupon = input2.value;
    const isCouponValueValid = function (cupones) {
        return cupones.name === cupon;
    };
    
    const userCoupon = cupones.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + cupon + "no es válido");
    } else {
    const porcentajeDescuento = userCoupon.discount;
    const precioDescuento = (precio * (100 - porcentajeDescuento))/100;
    const output1 = document.getElementById("precioDescuento");
    output1.innerText = "El precio con descuento es: " + precioDescuento + "$";
    }
    
};