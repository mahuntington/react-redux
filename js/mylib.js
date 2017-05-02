const myFunc = function(){
    console.log('included!');
}
const myFunc2 = function(){
    console.log('also included');
}

export default myFunc;

export { myFunc2 }
