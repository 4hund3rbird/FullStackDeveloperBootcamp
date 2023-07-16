const pi = 3.145372;
const add = (x,y)=>x+y;
const sqr = (x)=>x*x;
const cube = (x)=>x*x*x;
const msg= "Thank you for using math.js a runtime package made by thunderbird10 :)";

// module.exports.add=add;

const math={
    pi:pi,
    add:add,
    sqr:sqr,
    cube:cube,
    msg:msg
}

exports.sub=(x,y)=>x-y;
module.exports=math;