function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function named() {
        console.log('skish')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('no name.')
      }
}
