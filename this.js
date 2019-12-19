x = () => this;
const a = {
    a: 'a'
};

const obj = {
    p: 10,
    getThis: () => {
        console.log("FROM OBJECT VARIABLE", this);
        return this;
    },
    getThisObj: (a) => this,
    getThis1() {
        return this;
    }
}
console.log("1", x.call());
console.log("Since arrow function is used for function implementation:", obj.getThis(obj), obj.getThis(), obj.getThis(this));
console.log("3", obj.getThisObj(a));
console.log("Normal Function decelration intialises this with obj reference", obj.getThis1());
console.log("5", obj.getThis(this));
console.log("6", obj.getThis1(this));
console.log("7", obj.getThis1.call(this));
console.log("8", obj.getThis.bind(this))


const prepareBark = dog => {
    const say = `${dog} barked!`
    return () => console.log(say)
}
const bark = prepareBark(`Roger`)
bark();