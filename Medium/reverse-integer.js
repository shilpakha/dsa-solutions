/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let limit = Math.pow(2,31);
    let positivex = x < 0 ?  Math.abs(x) : x;

    let rev = 0;
    let rem = 0;
    if(positivex == 0 ) return 0;
    while(positivex > 0) {
        rem = positivex % 10;
        rev = (rev * 10) + rem;
        positivex = Math.floor(positivex / 10);
    }
    if(rev < -limit || rev > limit) //2^31 case
        return 0;
    return ( x < 0 ?  (-1)* rev : rev);
};