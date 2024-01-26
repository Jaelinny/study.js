class Food {
    constructor(name) {
	this.name = name;
	this.brands = [];
    }
    addBrand(brand) {
	this.brands.push(brand)
    }
    print() {
	console.log(`${this.name}을/를 파는 음식점들:`)
	    console.log(this.brands.join(', '));
    }
}

class Pizza extends Food {
    constructor(brand){
	super('피자');
	this.addBrand(brand);
    }
}

class Chicken extends Food {
    constructor(brand){
	super('치킨');
	this.addBrand(brand);
    }
}

const pizza = new Pizza(['피자헛', '도미노 피자']);
const chicken = new Chicken(['굽네치킨', 'BBQ']);

pizza.print()
chicken.print();
