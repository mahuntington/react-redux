const myFunc = function(){
    console.log('included!');
}
const myFunc2 = function(){
    var a = 1;
    var b = 2;
    var c = {a,b};
    console.log(c);
}

class Foo {
    bar(){
        console.log('ya');
    }
}

export default myFunc;

export { myFunc2, Foo }
