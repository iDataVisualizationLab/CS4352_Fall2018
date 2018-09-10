function cpuUtil(c, p, n){
  if(!p){
    console.log("Calc P");
    document.getElementById("iotime").value = Math.pow((1-c),(1/n)).toFixed(3);
  } else if(!n){
    console.log("Calc N");
    document.getElementById("processNumber").value = Math.ceil(Math.log(1-c)/Math.log(p));
  } else {
    console.log("Calc CPU Util");
    document.getElementById("cpuUtil").value = (1- Math.pow(p,n).toFixed(3));
  }
}
