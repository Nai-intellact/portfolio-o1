function multiplyArrayAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }

    }
    console.log('this is product:', product);
    return product;


}
multiplyArrayAll([[1, 2], [2, 3, 4], [5, 6]]);
