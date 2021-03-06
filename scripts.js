/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
const alphabet = LETTERS.split('');

/**
 * Byrja forrit.
 */
function start() {
  let begin =prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  if(begin.localeCompare("kóða")!=0 && begin.localeCompare("afkóða")!=0) {
    alert("Veit ekki hvaða aðgerð " + begin + " er. Reyndu aftur");
    start();
  }
  let n=prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1,31]');
  while(!Number.isInteger(parseInt(n)) || n<1 || n>31) {
    alert(n + " er ekki heiltala á bilinu [1, 31]. Reyndu aftur.");
    start();
  }
  let str=prompt('Gefðu upp strenginn sem á að '+ begin +' með hliðrun ' +n);
  str=str.toLocaleUpperCase();
  if(str.length === 0) {
    alert("Þú gafst ekki upp streng. Reyndu aftur.");
    start();
  }
  while(str.match(/[^AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ]/)!=null) {
    alert("Þú gafst upp stafi sem ekki er hægt að " + begin +  ": " + str.match(/[^AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ]/).join(",") + ". Reyndu aftur.");
    start();
  }
  if(begin.localeCompare("kóða")==0) {
    alert(encode(str, parseInt(n)));
  }
  else {
    alert(decode(str, parseInt(n)));
  }
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  str=str.split('');
  for(i=0;i<str.length; i++) {
    let position=alphabet.indexOf(str[i]);
    let newPosition=(position+n)%alphabet.length;
    str[i]=alphabet[newPosition];
  }
  str=str.join('');
  return str;
}
/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  str=str.split('');
  for(i=0;i<str.length; i++) {
    let position=alphabet.indexOf(str[i]);
    let newPosition=position;
    if (position-n<0) {
      newPosition=(position+alphabet.length-n)%alphabet.length;
    }
    else { 
      newPosition=(position-n)%alphabet.length;
    }
    str[i]=alphabet[newPosition];
  }
  str=str.join('');
  return str;
}
console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');