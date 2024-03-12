import { Cupcake } from "/js/modules.js/Cupcake.js";


function cake() {

    const myCupcake = new Cupcake();

    const flavorBtns = document.querySelectorAll('.flavor');
        flavorBtns.forEach(flavor => {
            flavor.addEventListener('click', () => {
                const color =flavor.dataset.color;
                myCupcake.changeFlavor(flavor, color);
            })
        })
    
    const toppingBtns = document.querySelectorAll('.topping');

        toppingBtns.forEach(topping => {
        topping.addEventListener('click', () => {
            const imageUrl = topping.dataset.image;
            myCupcake.changeTopping(topping, imageUrl); 
        });
    });
    
    
    
    
}

cake();