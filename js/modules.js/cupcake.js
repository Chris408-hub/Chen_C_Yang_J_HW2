export function cake() {

class Cupcake {
    constructor() {
        this.flavor = '';
        this.topping = '';
    }

    changeFlavor(flavor) {
        this.flavor = flavor;
        this.makeCupcake();
    }

    changeTopping(topping) {
        this.topping = topping;
        this.makeCupcake();
    }

    makeCupcake() {
        // change cream color
        const cupcakeCream = document.querySelector('.cupcakeCream path');
        const creamColor = this.flavor === 'vanilla' ? '#f3e5ab' : '#d2691e'; 
        cupcakeCream.style.fill = creamColor; 

        // change topping
        const cupcakeTopping = document.querySelector('#cupcakeTopping');
        const toppingImage = this.topping === 'strawberry' ? '../images/strawberry.png' : '../images/blueberry.png';
        cupcakeTopping.style.backgroundImage = `url(${toppingImage})`;
        cupcakeTopping.style.display = 'block';
    }
}


    const myCupcake = new Cupcake();
    
    document.querySelector('.flavor-vanilla').addEventListener('click', () => myCupcake.changeFlavor('vanilla'));
    document.querySelector('.flavor-chocolate').addEventListener('click', () => myCupcake.changeFlavor('chocolate'));
    document.querySelector('.topping-strawberry').addEventListener('click', () => myCupcake.changeTopping('strawberry'));
    document.querySelector('.topping-blueberry').addEventListener('click', () => myCupcake.changeTopping('blueberry'));


}

