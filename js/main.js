//###################################################### 
// PALINDROMIA

// form sources
var usrStringForm = document.getElementById('usr_srting');

// info display hooks
var msgHtml      = document.getElementById('msg');
var checkMsgHtml = document.getElementById('check_msg');

// button hooks
var checkBtn  = document.getElementById('check_btn');
var eraseBtn  = document.getElementById('erase_btn');
var resumeBtn = document.getElementById('resume_btn');

checkBtn.addEventListener('click', 
  function() { 

    // form data retrieving
    var string = usrStringForm.value;
    var result = isPalindrome(string);
    var msg;

    if (string == '') {
      msg = 'Devi inserire una parola!'
    } else {
      msg  = '<strong class="highlight">' + string + '</strong>' + ((result[0]) ? ' è palindorma!' : ' non è palindorma!');
      var msg1='', msg2='';
      for (var i=0; i<result[3]; i++) {
        msg1 += result[1][i]+' '; 
        msg2 += result[2][i]+' ';
      }
      msg += '<br><br>guarda qua:<br>'+msg1+' (normale)<br>'+msg2+' (al contrario)';  
    }
    checkMsgHtml.innerHTML = msg;
    msgHtml.className = 'show';
  }
);

eraseBtn.addEventListener('click', 
  function() { 
    usrStringForm.value = '';
  }
);

resumeBtn.addEventListener('click', 
  function() { 
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';
    usrStringForm.value = '';
  }
);

function isPalindrome(parola) {
  /*  restituisce array:
        palindromo true/false
        lettere parola, senza spazi
        lettere paraola al contrario, senza spazi 
        lunghezza parola senza spazi
  */ 
  var string = parola.replace(/ /g,'');
  var ret = [true,[],[],string.length];
  for (var i=0; i<ret[3]; i++) {
    var j = string.length-1 - i;
    var si = string.slice(i,i+1);
    var sj = string.slice(j,j+1);
    if (si != ' ' && si != sj) ret[0] = false;
    ret[1].push(si);
    ret[2].push(sj);
    // console.log(si+' - '+sj);
  }
  return ret;
}

//###################################################### 
// LA (FINTA) MORRA DI SKYNET

// form sources
var usrNumberForm = document.getElementById('usr_nubmer');
var usrBetForm    = document.getElementById('usr_bet');

// info display hooks
var msgHtml2      = document.getElementById('msg2');
var checkMsgHtml2 = document.getElementById('check_msg2');

// button hooks
var checkBtn2     = document.getElementById('check_btn2');
var eraseBtn2     = document.getElementById('erase_btn2');
var resumeBtn2    = document.getElementById('resume_btn2');

// aux variables
var betOK = false;

checkBtn2.addEventListener('click', 
  function() {

    // retrieving data form
    var usrNumberValue = usrNumberForm.value; // 1,2,3,4,5
    var usrBetValue    = usrBetForm.value;    // pari,dispari
    var msg;

    if (usrNumberValue == '' || usrBetValue == '') {
      betOK = false;
      msg = 'Compila tutti i campi!';
    } else {

      betOK = true;
      var usrBetIsEven = (usrBetValue == 'pari') ? true : false;
      console.log('Numero: '+usrNumberValue+' - Scommessa: '+usrBetValue);

      var skyNumber = random(1,5);
      console.log('SkyNet, numero: '+skyNumber);

      var sum = sum2(usrNumberValue,skyNumber);
      var sumIsEven = isEven(sum); // array
      console.log('La somma '+sum+' è '+sumIsEven[1]);

      var betMsg = 'ha vinto SkyNet!';
      if ((sumIsEven[0] && usrBetIsEven) || (!sumIsEven[0] && !usrBetIsEven)) betMsg = 'hai vinto!';
      console.log(betMsg);

      msg = 'Hai scelto il numero <strong>'+usrNumberValue+'</strong> '+
            'scommettendo su <strong class="highlight">'+usrBetValue+'</strong><br><br>'+
            'SkyNet ha scelto il numero <strong>'+skyNumber+'</strong><br><br>'+
            'La somma <strong>'+sum+'</strong> è <strong class="highlight">'+sumIsEven[1]+'</strong>, '+
            'allora <strong class="highlight">'+betMsg+'</strong>';
    }

    checkMsgHtml2.innerHTML = msg;
    msgHtml2.className = 'show';

  }
);

eraseBtn2.addEventListener('click', 
  function() { 
    usrNumberForm.value  = '';
    usrBetForm.value     = '';
  }
);

resumeBtn2.addEventListener('click', 
  function() { 
    msgHtml2.className      = 'hide';
    checkMsgHtml2.innerHTML = '';
    if (betOK == true) {
      usrNumberForm.value     = '';
      usrBetForm.value        = '';
    }
  }
);

//###################################################### 
// GIOCA A MORRA CON SKYNET

// form sources
var usrNumberMorraForm = document.getElementById('usr_nubmer_morra');
var usrBetMorraForm    = document.getElementById('usr_bet_morra');

// info display hooks
var msgHtml3      = document.getElementById('msg_morra');
var checkMsgHtml3 = document.getElementById('check_msg_morra');
var statHtml      = document.getElementById('stat_morra');

// button hooks
var checkBtn3     = document.getElementById('check_btn_morra');
var eraseBtn3     = document.getElementById('erase_btn_morra');
var resumeBtn3    = document.getElementById('resume_btn_morra');

// aux variables
var betOKmorra = false,
    stat = [0,0];

checkBtn3.addEventListener('click', 
  function() {

    // retrieving data form
    var usrNumberValue = usrNumberMorraForm.value; // 0,1,2,3,4,5
    var usrBetValue    = usrBetMorraForm.value;    // 0,1,2,3,4,5,6,7,8,9,10
    var msg;

    if (usrNumberValue == '' || usrBetValue == '') {
      betOKmorra = false;
      msg = 'Compila tutti i campi!';
    } else {

      betOKmorra = true;
      // var usrBetIsEven = (usrBetValue == 'pari') ? true : false;
      console.log('Utente numero: '+usrNumberValue+' - Scommessa: '+usrBetValue);

      var skyNumber = random(0,5);
      var skyBet = random(0,5);
      console.log('SkyNet numero: '+skyNumber+' - Scommessa: '+skyBet);

      var sum = sum2(usrNumberValue,skyNumber);
      // var sumIsEven = isEven(sum); // array
      console.log('La somma è '+sum);

      var betMsg;
      if      (sum == usrBetValue && sum != skyBet) { betMsg = 'hai vinto!';       stat[0]++; }
      else if (sum != usrBetValue && sum == skyBet) { betMsg = 'ha vinto SkyNet!'; stat[1]++; }
      else                                          { betMsg = 'nulla di fatto!'; }
      console.log(betMsg);
      
      var bestMsg = skyBest(random(1,8));
      msg = 'Tu urli <strong class="highlight">'+usrBetValue+'</strong> '+
            'e tiri <strong>'+usrNumberValue+'</strong><br>'+
            'SkyNet urla <strong class="highlight">'+skyBet+'</strong>, '+
            bestMsg+' e tira <strong>'+skyNumber+'</strong>,<br><br>'+
            'La somma è <strong class="highlight">'+sum+'</strong>, <strong>'+betMsg+'</strong>';
      
      // stat
      console.log(stat);
      var statMsg = '';
      statMsg = 'Tu '+stat[0]+' - SkyNet  '+stat[1];
      statHtml.innerHTML = statMsg;

    }

    checkMsgHtml3.innerHTML = msg;
    msgHtml3.className = 'show';

  }
);

eraseBtn3.addEventListener('click', 
  function() { 
    usrNumberMorraForm.value  = '';
    usrBetMorraForm.value     = '';
  }
);

resumeBtn3.addEventListener('click', 
  function() { 
    msgHtml3.className      = 'hide';
    checkMsgHtml3.innerHTML = '';
    if (betOKmorra == true) {
      usrNumberMorraForm.value = '';
      usrBetMorraForm.value    = '';
    }
  }
);

//###################################################### 
// FUNZIONI

function skyBest(N) {
  var bestList = ['bestemmia', 'impreca', 'sputa', 'si stizzisce', 'raglia', 'ti spintona', 'sbatte i pugni', 'scalcia'];
  if (N>=1 && N<=8) return bestList[N-1];
  else return bestList[0];
}
function random(n1,n2) {
  return Math.floor(Math.random()*(n2-n1+1))+n1;
}
function sum2(n1,n2) {
  return parseInt(n1)+parseInt(n2);
}
function isEven(n) {
  /*  restituisce array:
        numero pari true/false
        traduzione pari/dispari
  */
  var ret = [];
  ret[0] = (n % 2 == 0) ? true : false;
  ret[1] = (ret[0]) ? 'pari' : 'dispari';
  return ret;
}