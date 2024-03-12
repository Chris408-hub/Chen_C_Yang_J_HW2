export function cake() {

class Cupcake {
    constructor() {
        this.flavor = '';
        this.topping = '';
    }

    changeFlavor(flavor) {
        this.flavor = flavor;
        this.topping = '';
        this.makeCupcake();
    }

    changeTopping(topping) {
        this.topping = topping;
        this.makeCupcake();
    }

    makeCupcake() {
        // change cream color
        const cupcakeCream = document.querySelector('.cupcakeCream path');
        const creamColor = this.flavor === 'vanilla' ? '#F5F5Df' : '#744823'; 
        cupcakeCream.style.fill = creamColor; 

        // change topping
        const cupcakeTopping = document.querySelector('#cupcakeTopping');
    if (this.topping) {
        const toppingImage = this.topping === 'strawberry' ? '../images/strawberry.png' : '../images/blueberry.png';
        cupcakeTopping.style.backgroundImage = `url(${toppingImage})`;
        cupcakeTopping.style.display = 'block';
        // cupcakeTopping.style.backgroundPosition = 'top center';
        cupcakeTopping.style.backgroundSize = '40%';
        cupcakeTopping.style.backgroundRepeat = 'no-repeat';
    } else {
        // If no topping has been selected, clear the topping image
        cupcakeTopping.style.backgroundImage = '';
        cupcakeTopping.style.display = 'none';
    }
    }
}


    const myCupcake = new Cupcake();
    
    document.querySelector('.flavor-vanilla').addEventListener('click', () => myCupcake.changeFlavor('vanilla'));
    document.querySelector('.flavor-chocolate').addEventListener('click', () => myCupcake.changeFlavor('chocolate'));
    document.querySelector('.topping-strawberry').addEventListener('click', () => myCupcake.changeTopping('strawberry'));
    document.querySelector('.topping-blueberry').addEventListener('click', () => myCupcake.changeTopping('blueberry'));


}

