let count = 1;

window.onload = () => {
    printer(motion1);
    printer(motion2);
    printer(interMotion);

    printerReverse(motion1);
    printerReverse(motion2);
    printerReverse(interMotion);
}

const motion1 = (i) => {
    return (i+3)%4!=0;
}

const motion2 = (i) => {
    return (i+1)%4!=0;
}

const interMotion = (i) => {
    return i%2!=0
}

const printer = (boleBole) => {
    let str = "";

    for(i=1; i < 50; i++){
        
            str += i+"%{ transform: translateX("+(i+1)+"vw); opacity: ";

            if(boleBole(i)){
                str += "0;} "
            }else{
                str += "1;} "
            }
    }
    
    console.log(count++ + ": ");
    console.log(str);
}

const printerReverse = (boleBole) => {
    let str = "";

    for(i=51; i < 100; i++){
        
            str += i+"%{ transform: translateX("+(101-i)+"vw); opacity: ";

            if(boleBole(i)){
                str += "0;} "
            }else{
                str += "1;} "
            }
    }
    
    console.log(count++ + ": ");
    console.log(str);
}