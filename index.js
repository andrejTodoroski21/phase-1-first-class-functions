function receivesAFunction(callback){
    console.log(callback());
}


function returnsANamedFunction(){
    return function callback() {};
}
function returnsAnAnonymousFunction(){
    return () =>{}
}