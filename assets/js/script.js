document.addEventListener('DOMContentLoaded', function() {
    
    /* Capturo los elementos */
    const azul = document.getElementById('azul');
    const rojo = document.getElementById('rojo');
    const verde = document.getElementById('verde');
    const amarillo = document.getElementById('amarillo');
    const keyDiv = document.getElementById('key');


    azul.addEventListener('click', function() {
        chgColor(azul, 'black');
    });

    rojo.addEventListener('click', function() {
        chgColor(rojo, 'black');
    });

    verde.addEventListener('click', function() {
        chgColor(verde, 'black');
    });

    amarillo.addEventListener('click', function() {
        chgColor(amarillo, 'black');
    });

    function chgColor(elemento, color) {
        elemento.style.backgroundColor = color;
    }

    /*  Evaluo teclas presionadas */
    document.addEventListener('keydown', function(event) {
        let color;

        switch (event.key) {
            case 'a':
                color = 'pink';
                break;
            case 's':
                color = 'orange';
                break;
            case 'd':
                color = 'lightblue';
                break;
            case 'q':
                NewElementDiv('purple');
                break;
            case 'w':
                NewElementDiv('gray');
                break;
            case 'e':
                NewElementDiv('brown');
                break;
            default:
                return; 
        }

        keyDiv.style.backgroundColor = color;
    });


    function NewElementDiv(colordiv) {
        const DivGenerado= document.createElement('div');
        DivGenerado.className = 'cajas';
        DivGenerado.style.backgroundColor = colordiv;
        DivGenerado.style.width = '200px';
        DivGenerado.style.height = '200px';
        DivGenerado.style.margin = '10px';
        DivGenerado.style.display= 'inline-block';        

        document.body.appendChild(DivGenerado); 
    }
});