const areaRectangle = (x,y) =>{
    return x*y;
}
const areaSquare = (x) =>{
    return areaRectangle(x,x);
}
const pi = 3.14;
const areaCircle = (r) =>{
    return pi*r*r;
}

module.exports = {
    areaRectangle,
    areaSquare,
    areaCircle
};