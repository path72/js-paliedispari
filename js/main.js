//###################################################### 
//

// form sources
var usrStringForm      = document.getElementById('usr_srting');
var usrPariDispariForm = document.getElementById('usr_paridispari');
var usrNumberForm      = document.getElementById('usr_nubmer');
// morra vera
var usrBetNumberForm = document.getElementById('usr_bet_number');
var usrNumberForm    = document.getElementById('usr_nubmer');

// info display hooks
var msgHtml           = document.getElementById('msg');       // show/hide
var checkMsgHtml      = document.getElementById('check_msg'); // content msg

// button hooks
var checkBtn     = document.getElementById('check_btn');
var eraseBtn     = document.getElementById('erase_btn');
var resumeBtn    = document.getElementById('resume_btn');

//###################################################### 
// PALINDROMO

checkBtn.addEventListener('click', 
  function() { 

    // form data retrieving
    var string = usrStringForm.value;
    var result = isPalindrome(string);

    if (string == '') {
      msg = 'Devi inserire una parola!'
    } else {
      msg  = '<strong class="highlight">' + string + '</strong>' + ((result[0]) ? ' è palindorma!' : ' non è palindorma!');
      var msg1='', msg2='';
      for (var i=0; i<string.length; i++) {
        msg1 += result[1][i]+' '; 
        msg2 += result[2][i]+' ';
      }
      msg += '<br><br>guarda qua:<br>'+msg1+' (normale)<br>'+msg2+' (al contrario)';  
    }
    checkMsgHtml.innerHTML = msg;
    msgHtml.className = 'show';
  }
);

resumeBtn.addEventListener('click', 
  function() { 
    
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';
    usrStringForm.value = '';
    
  }
);

eraseBtn.addEventListener('click', 
  function() { 
    
    usrStringForm.value = '';

  }
);

function isPalindrome(parola) {
  var ret = [true,[],[]];

  // togli gli spazi
  // for (var i=0; i<parola.length; i++) {
  //   console.log(parola.slice(i,i+1));
  //   console.log(parola.subString(i,i+1));
  //   if (parola.slice(i,i+1)== ' ') {
  //     // parola.subString()
  //   }
  // }

  for (var i=0; i<parola.length; i++) {
    var j = parola.length-1 - i;
    // console.log(parola.slice(i,i+1)+' - '+parola.slice(j,j+1));
    if (parola.slice(i,i+1) != parola.slice(j,j+1)) ret[0] = false;
    ret[1][i] = parola.slice(i,i+1);
    ret[2][i] = parola.slice(j,j+1);
    // console.log(ret[1][i]+' - '+ret[2][i]);
  }
  return ret;
}

//###################################################### 
// 

// usrPariDispari = 'pari' oppure 'dispari'
var usrPariDispariForm = 'pari'; 
var usrNumberForm      = 3;

var usrBetIsEven = (usrPariDispariForm == 'pari') ? true : false;
console.log('hai scommesso su pari: '+usrBetIsEven+'\ne scelto il numero: '+usrNumberForm);

var skyNumber = random(1,5);
console.log('SkyNet ha scelto il numero: '+skyNumber);

var sum = sum2(usrNumberForm,skyNumber);
var sumIsEven = isEven(sum);
console.log('la somma è '+sum+', pari: '+sumIsEven);

var msg = 'ha vinto SkyNet!';
if ((sumIsEven && usrBetIsEven) || (!sumIsEven && !usrBetIsEven)) msg = 'hai vinto!';
console.log(msg);

function random(n1,n2) {
  return Math.floor(Math.random()*(n2-n1+1))+n1;
}
function sum2(n1,n2) {
  return parseInt(n1)+parseInt(n2);
}
function isEven(n) {
  return (n % 2 == 0) ? true : false;
}







// //###################################################### 
// //
// // stampa primi 100 numeri
// // multipli 3 > Fizz
// // multipli 5 > Buzz
// // multipli 3 e 5 > FizzBuzz

// // form sources
// var totalNumbersForm = document.getElementById('total_numbers');
// var factor1Form      = document.getElementById('factor_1');
// var factor2Form      = document.getElementById('factor_2');
// var msg1Form         = document.getElementById('msg_1');
// var msg2Form         = document.getElementById('msg_2');

// // info display hooks
// var msgHtml           = document.getElementById('msg');
// var checkMsgHtml      = document.getElementById('check_msg');
// var displayResultHtml = document.getElementById('display_result');
// var resultListHtml    = document.getElementById('result_list');

// // button hooks
// var checkBtn     = document.getElementById('check_btn');
// var eraseBtn     = document.getElementById('erase_btn');
// var resumeBtn    = document.getElementById('resume_btn');

// checkBtn.addEventListener('click', 
//   function() { 

//     // form data retrieving
//     var N = totalNumbersForm.value,
//         n1 = factor1Form.value,
//         n2 = factor2Form.value,
//         msg1 = msg1Form.value,
//         msg2 = msg2Form.value;

//     // consistency
//     if (N=='' || n1=='' || n2=='' || msg=='' || msg2=='' || isNaN(N) || isNaN(n1)|| isNaN(n2)) {
//       msgHtml.className = 'show';
//       checkMsgHtml.innerHTML = 
//           'Compila bene tutti i campi:<br>'+
//           '<strong>Numeri totali</strong>,<br>'+
//           '<strong>Divisore 1</strong> e <strong>Divisore 2</strong><br>'+
//           'devono essere dei numeri!';
//     } else {

//       for (var i = 1; i<=N; i++) {
  
//         var j=i, msg, flag1, flag2;
//         flag1 = (i % n1 == 0) ? true : false;
//         flag2 = (i % n2 == 0) ? true : false;
  
//         if      ( flag1 && !flag2) msg = msg1;
//         else if (!flag1 &&  flag2) msg = msg2;
//         else if ( flag1 &&  flag2) msg = msg1 + msg2;
//         else                       msg = i;
  
//         console.log(j+': '+msg);
//         resultListHtml.innerHTML += '<tr><td>'+j+'</td><td>'+msg+'</td><tr>';
  
//         // view
//         checkMsgHtml.innerHTML = 
//               'Lista di <strong>'+N+' numeri</strong>:<br>'+
//               'I multipli di <strong>'+n1+'</strong>: etichetta <strong>'+msg1+'</strong><br>'+
//               'I multipli di <strong>'+n2+'</strong>: etichetta <strong>'+msg2+'</strong><br>'+
//               'I multipli di <strong>'+n1+'</strong> e <strong>'+n2+'</strong>: etichetta <strong>'+msg1+msg2+'</strong><br>';
//         msgHtml.className = 'show';
//         displayResultHtml.className = 'show';

//       }
//     }
//   }
// );

// eraseBtn.addEventListener('click', 
//   function() { 
    
//     msgHtml.className = 'hide';
//     checkMsgHtml.innerHTML = '';

//     resultListHtml.innerHTML = '';
//     displayResultHtml.className = 'hide';

//     totalNumbersForm.value = '';
//     factor1Form.value = '';
//     factor2Form.value = '';
//     msg1Form.value = '';
//     msg2Form.value = '';

//   }
// );

// resumeBtn.addEventListener('click', 
//   function() { 
    
//     msgHtml.className = 'hide';
//     checkMsgHtml.innerHTML = '';

//     resultListHtml.innerHTML = '';
//     displayResultHtml.className = 'hide';
    
//   }
// );
// //###################################################### 
// //

