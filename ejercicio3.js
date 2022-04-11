var ArrA = [ 2,3,5,12,54,5,
    -1,0,4,23,66,7];
var ArrB = [];
var ArrC=[];
ArrB = ArrB.concat(ArrA);
ArrB = ArrB.concat(ArrA);
ArrC= ArrC.concat(ArrA);
ArrC= ArrC.concat(ArrA);
for(var i=0;i<ArrB.length;i++){
    let obj ={
     orig:ArrC[i],
     mod:Math.sqrt(ArrB[i])
    };
    if (!isNaN(obj.mod)) {
    console.log("orig: "+obj.orig,"  mod: "+ obj.mod.toFixed(2) );
    }
}