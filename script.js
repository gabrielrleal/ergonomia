function calcularRisco() {
  var posturaCostas = document.getElementById("postura-costas").value;
  var posturaBracos = document.getElementById("postura-bracos").value;
  var posturaPernas = document.getElementById("postura-pernas").value;
  var esforco = document.getElementById("esforco").value;

  let risco;
  let carga;
  if (posturaCostas == 1) {
    if (posturaPernas == 1 || posturaPernas == 2 || posturaPernas == 3 || posturaPernas == 6) {
      risco = 1;
    } else if (posturaPernas == 4 || posturaPernas == 5) {
      if (esforco == 3 && posturaBracos == 3) {
        risco = 3;
      }
    } else {
      if (posturaBracos == 3 || esforco == 3) {
        risco = 2;
      }
    }
  } else if (posturaCostas == 2) {
    if (posturaPernas == 1) {
      if (posturaBracos == 1 || posturaBracos == 2) {
        if (carga == 1 || carga == 2) {
          risco = 2;
        } else {
          risco = 3;
        }
      } else if (posturaBracos == 3) {
        if (carga == 1 || carga == 2) {
          risco = 3;
        } else {
          risco = 4;
        }
      }
    } else if (posturaPernas == 2) {

      if (carga == 1 || carga == 2) {
        risco = 2;
      } else {
        risco = 3;
      }
    } else if (posturaPernas == 3) {
      if (carga == 1 || carga == 2) {
        if (posturaBracos == 1) {
          risco = 2;
        }
      }
      if (carga == 1 && posturaBracos == 1) {
        risco = 2;
      } else {
        risco = 3;
      }
    } else if (posturaPernas == 4) {
      if (posturaBracos == 1 || carga == 1) {
        risco = 3;
      } else {
        risco = 4;
      }
    } else if (posturaPernas == 5) {
      if (posturaBracos == 1 || (carga == 1 && posturaBracos == 2)) {
        risco = 3;
      } else {
        risco = 4;
      }
    } else if (posturaPernas == 6) {
      if (posturaBracos == 1) {
        risco = 2;
      } else if (posturaBracos == 2 && carga != 3) {
        risco = 3;
      } else {
        risco = 4;
      }
    } else if (posturaPernas == 7) {
      if (carga == 1) {
        risco = 2;
      } else if (carga == 2 || (carga == 3 && posturaBracos == 1)) {
        risco = 3;
      } else {
        risco = 4;
      }
    }
  } else if (posturaCostas == 3) {
    if(posturaPernas == 1){
      if (posturaBracos == 1){
        risco = 1;
      }else if ((posturaBracos == 2 || posturaBracos == 3) && (carga == 1 || carga == 2)) {
        risco = 2;
      }else {
        risco = 3;
      }
    }else if(posturaPernas == 2){
      risco = 1;
    }else if (posturaPernas == 3){
      if ((posturaBracos == 1 || posturaBracos == 2 ) && (carga == 1 || carga == 2 )){
        risco = 1;
      }else if (posturaBracos == 3 && carga != 1){
        risco = 3;
      }else {
        risco = 2;
      }
    }else if (posturaPernas == 4 ){
      if (posturaBracos == 1){
        risco = 3;
      }else {
        risco = 4;
      }
    }else if (posturaPernas == 5){
      risco = 4;
    }else if (posturaPernas == 6){
      if (posturaBracos == 1){
        risco = 1;
      }else if (posturaBracos == 2){
        risco = 3;
      }else {
        risco = 4;
      }
    }else if (posturaPernas == 7){
      risco = 1;
    }
  }else if (posturaCostas == 4){
    if (posturaPernas == 1){
      if (posturaBracos == 1 && carga == 1){
        risco = 2;
      }else if ((posturaBracos == 3 ) || (posturaBracos == 2 && carga == 3) ){
        risco = 4;
      }else {
        risco = 3;
      }
    }else if (posturaPernas == 2){
      if (carga == 1 || (carga == 2 && posturaBracos == 1)){
        risco = 2;
      }else if ( ((posturaBracos==2) || (posturaBracos==3)) && ( carga == 3 )){
        risco = 4;
      }else {
        risco = 3;
      }
    }else if (posturaPernas == 3){
      if ((posturaBracos == 1) && ((carga == 1) || (carga == 2))){
        risco = 2;
      }else if (carga == 3 && (posturaBracos== 2 || posturaBracos == 3 )){
        risco = 4;
      }else {
        risco = 3;
      }
    }else if (posturaPernas == 4  || posturaPernas == 5  || posturaPernas == 6 ){
      risco = 4;
    }else if (posturaPernas == 7){
      if (carga == 1){
        risco = 2;
      }else if (carga ==2 ){
        risco = 3;
      }else {
        risco = 4;
      }
    }
  }


  var output = document.getElementById("resultado");

  switch (risco) {
    case 1:
      output.innerHTML = "Risco: 1. Postura aceit??vel caso n??o seja mantida ou repetida por um per??odo prolongado.";
      break;
    case 2:
      output.innerHTML = "Risco: 2. Necessita de investiga????o mais aprofundada, podendo ser necess??rio fazer altera????es.";
      break;
    case 3:
      output.innerHTML = "Risco: 3. Necessita de investiga????o e pode ser necess??rio proceder a altera????es rapidamente.";
      break;
    case 4:
      output.innerHTML = "Risco: 4. Necessita de investiga????o e devem ocorrer altera????es rapidamente.";
      break;
    default:
      output.innerHTML = "N??o foi poss??vel calcular o risco de les??o.";
  }
}