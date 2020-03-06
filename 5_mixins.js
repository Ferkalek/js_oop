function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating')
    }
};

const canWalk = {
    walk: function() {
        console.log('walking')
    }
};

const canSwim = {
    swim: function() {
        console.log('swiming')
    }
};

function Person() {}

mixin(Person.prototype, canEat, canWalk);

function GoldFish() {}

mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();

console.log('......', goldFish);