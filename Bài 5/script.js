function Fibo(n) {
    if(n==1 || n==0) return 1;
    return Fibo(n-1) + Fibo(n-2);
}
function printFibo() {

    let a = +(document.getElementById('number').value);
    document.getElementById('result').innerHTML = Fibo(a);
}

