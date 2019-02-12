//if (2*4 == 8) {
 //   console.log ("Verno!")
//} else {
//    console.log("Neverno")
//}
let num = 50;
if (num <49 ) {
    console.log ("Neverno")
} else if (num >100 ){
    console.log("mnogo!")
} else {
    console.log("Verno")
}

(num == 50) ? console.log("Verno!") : console.log("Neverno!");

switch (num) {
    case num < 49:
        console.log ("Neverno");
        break;
    case num > 100:
        console.log ("Mnogo");
        break;
    case num > 80:
        console.log ("vse eshe mnogo");
        break;
    case 50:
        console.log ("Verno!");
        break;
    default:
        console.log ("chto-to poshlo ne tak");
        break;
}

let num = 50;
//while (num < 55) {
 //   console.log(num);
  //  num++;
//}
let num = 50;
do {
    console.log(num);
    num++;
}
while (num <55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue         // or break для остановки цикла
    }
    console.log(i)
}


    Let a = “abc”
    Console.log(a[1])