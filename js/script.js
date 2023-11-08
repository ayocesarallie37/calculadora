function suma() {

    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);

    let r= n1+n2;

    document.getElementById('r').value= r;
}

function resta() {

    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);

    let r= n1-n2;

    document.getElementById('r').value= r;
}

function multiplicacion() {

    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);

    let r= n1 * n2;

    document.getElementById('r').value= r;
}

function division() {

    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);

    let r= n1/n2;

    document.getElementById('r').value= r;
}

function raiz() {

    let n1=parseFloat(document.getElementById('n1').value);

    let r=Math.sqrt(n1);
    
    document.getElementById('r').value= r;
}