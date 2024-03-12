export class Cupcake {
    constructor() {
        this.flavor = '';
        this.topping = '';
    }

    changeFlavor(flavor,color) {
        this.flavor = flavor;
        this.topping = '';
        this.makeCupcake(color, null);
    }

    changeTopping(topping,imageUrl) {
        this.topping = topping;
        this.makeCupcake(null, imageUrl);
    }

    makeCupcake(color, imageUrl) {
        // change cream color
        const cupcakeCreams = document.querySelectorAll('.cupcakeCream path');
        if (color){
            cupcakeCreams.forEach(cream => {
            cream.style.fill = color; 
            });   
            }
        // change topping
        const cupcakeTopping = document.querySelector('#cupcakeTopping');
        if (imageUrl) {
            cupcakeTopping.style.backgroundImage = `url(${imageUrl})`;
            cupcakeTopping.style.display = 'block';
            // cupcakeTopping.style.backgroundPosition = 'top center';
            cupcakeTopping.style.backgroundSize = '40%';
            cupcakeTopping.style.backgroundRepeat = 'no-repeat';
        } else if (!this.topping) {
            // If no topping has been selected, clear the topping image
            cupcakeTopping.style.backgroundImage = '';
            cupcakeTopping.style.display = 'none';
        }
        }
}


    



