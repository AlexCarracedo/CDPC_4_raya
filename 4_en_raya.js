const COLOR0 = "white";
const COLOR_JUG1 = "red";
const COLOR_JUG2 = "blue";

var x = 0;
var y = 100;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = parseInt(prompt("Seleccione el color que comience la partida (0->Rojas/1->Azules)"));

while (h == 0) {
  if (i !== 0 && i !== 1) {
    i = parseInt(prompt("Seleccione el color que comience la partida (0->Rojas/1->Azules)"));
  }
  if (i === 0) {
    h = 1;
  }
  if (i === 1) {
    h=2
  }
}

function setup() {
  createCanvas(800, 700);
  background(5, 136, 211);
}

function draw() {
  while (y <= height - 100) {
    while (x < width - 100) {
      x = x + 100;
      fill(COLOR0);
      ellipse(x, y, 75, 75);
    }
    y = y + 100;
    x = 0;
  }

  if (i === 0) {
    var div = document.querySelector("div");
    div.textContent = "Comienzan las rojas. Pulsa para empezar.";
    i = 2;
  }
  if (i === 1) {
    var div = document.querySelector("div");
    div.textContent = "Comienzan las azules. Pulsa para empezar.";
  }

  addEventListener("click", clickColumna);
}

function clickColumna(_event) {
  if (i % 2 === 0) {
    if (mouseX >= 100 - 75 / 2 && mouseX <= 100 + 75 / 2 && a < 6) {
      fill(COLOR_JUG1);
      ellipse(100, 600 - 100 * a, 75, 75);
      i = i + 1;
      a = a + 1;
    }
    if (mouseX >= 200 - 75 / 2 && mouseX <= 200 + 75 / 2 && b < 6) {
      fill(COLOR_JUG1);
      ellipse(200, 600 - 100 * b, 75, 75);
      i = i + 1;
      b = b + 1;
    }
    if (mouseX >= 300 - 75 / 2 && mouseX <= 300 + 75 / 2 && c < 6) {
      fill(COLOR_JUG1);
      ellipse(300, 600 - 100 * c, 75, 75);
      i = i + 1;
      c = c + 1;
    }
    if (mouseX >= 400 - 75 / 2 && mouseX <= 400 + 75 / 2 && d < 6) {
      fill(COLOR_JUG1);
      ellipse(400, 600 - 100 * d, 75, 75);
      i = i + 1;
      d = d + 1;
    }
    if (mouseX >= 500 - 75 / 2 && mouseX <= 500 + 75 / 2 && e < 6) {
      fill(COLOR_JUG1);
      ellipse(500, 600 - 100 * e, 75, 75);
      i = i + 1;
      e = e + 1;
    }
    if (mouseX >= 600 - 75 / 2 && mouseX <= 600 + 75 / 2 && f < 6) {
      fill(COLOR_JUG1);
      ellipse(600, 600 - 100 * f, 75, 75);
      i = i + 1;
      f = f + 1;
    }
    if (mouseX >= 700 - 75 / 2 && mouseX <= 700 + 75 / 2 && g < 6) {
      fill(COLOR_JUG1);
      ellipse(700, 600 - 100 * g, 75, 75);
      i = i + 1;
      g = g + 1;
    }
    if (checkWinner(COLOR_JUG1)) {
        var div = document.querySelector("div");
        div.textContent = "¡Las rojas ganaron!";
        removeEventListener("click", clickColumna);
    } else if (h==2 && i==43) {
        var div = document.querySelector("div");
        div.textContent = "Es un empate.";
        removeEventListener("click", clickColumna);
    } else if (i % 2 === 1) {
        var div = document.querySelector("div");
        div.textContent = "Es el turno de las azules.";
    }
  } else {
    if (mouseX >= 100 - 75 / 2 && mouseX <= 100 + 75 / 2 && a < 6) {
      fill(COLOR_JUG2);
      ellipse(100, 600 - 100 * a, 75, 75);
      i = i + 1;
      a = a + 1;
    }
    if (mouseX >= 200 - 75 / 2 && mouseX <= 200 + 75 / 2 && b < 6) {
      fill(COLOR_JUG2);
      ellipse(200, 600 - 100 * b, 75, 75);
      i = i + 1;
      b = b + 1;
    }
    if (mouseX >= 300 - 75 / 2 && mouseX <= 300 + 75 / 2 && c < 6) {
      fill(COLOR_JUG2);
      ellipse(300, 600 - 100 * c, 75, 75);
      i = i + 1;
      c = c + 1;
    }
    if (mouseX >= 400 - 75 / 2 && mouseX <= 400 + 75 / 2 && d < 6) {
      fill(COLOR_JUG2);
      ellipse(400, 600 - 100 * d, 75, 75);
      i = i + 1;
      d = d + 1;
    }
    if (mouseX >= 500 - 75 / 2 && mouseX <= 500 + 75 / 2 && e < 6) {
      fill(COLOR_JUG2);
      ellipse(500, 600 - 100 * e, 75, 75);
      i = i + 1;
      e = e + 1;
    }
    if (mouseX >= 600 - 75 / 2 && mouseX <= 600 + 75 / 2 && f < 6) {
      fill(COLOR_JUG2);
      ellipse(600, 600 - 100 * f, 75, 75);
      i = i + 1;
      f = f + 1;
    }
    if (mouseX >= 700 - 75 / 2 && mouseX <= 700 + 75 / 2 && g < 6) {
      fill(COLOR_JUG2);
      ellipse(700, 600 - 100 * g, 75, 75);
      i = i + 1;
      g = g + 1;
    }
    if (checkWinner(COLOR_JUG2)) {
      var div = document.querySelector("div");
      div.textContent = "¡Las azules ganaron!";
      removeEventListener("click", clickColumna);
    } else if (h==1 && i==44) {
      var div = document.querySelector("div");
      div.textContent = "Es un empate.";
      removeEventListener("click", clickColumna);
    } else if (i % 2 === 0) {
      var div = document.querySelector("div");
      div.textContent = "Es el turno de las rojas.";
    }
  }
}

function checkWinner(playerColor) {
  // Comprobar si hay un ganador en el tablero
  var cells = document.getElementsByTagName("ellipse");
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].style.fill === playerColor) {
      var x = cells[i].cx.baseVal.value;
      var y = cells[i].cy.baseVal.value;
      if (
        checkHorizontal(x, y, playerColor) ||
        checkVertical(x, y, playerColor) ||
        checkDiagonal(x, y, playerColor)
      ) {
        return true;
      }
    }
  }
  return false;
}

function checkHorizontal(x, y, playerColor) {
  var count = 0;
  var i = 1;
  while (i < 4 && x + i * 100 <= 700) {
    var nextCell = document.elementFromPoint(x + i * 100, y);
    if (nextCell.style.fill === playerColor) {
      count++;
      i++;
    } else {
      break;
    }
  }
  if (count >= 3) {
    return true;
  }

  count = 0;
  i = 1;
  while (i < 4 && x - i * 100 >= 100) {
    var nextCell = document.elementFromPoint(x - i * 100, y);
    if (nextCell.style.fill === playerColor) {
      count++;
      i++;
    } else {
      break;
    }
  }
  if (count >= 3) {
    return true;
  }

  return false;
}

function checkVertical(x, y, playerColor) {
  var count = 0;
  var i = 1;
  while (i < 4 && y + i * 100 <= 600) {
    var nextCell = document.elementFromPoint(x, y + i * 100);
    if (nextCell.style.fill === playerColor) {
      count++;
      i++;
    } else {
      break;
    }
  }
  if (count >= 3) {
    return true;
  }

  return false;
}

function checkDiagonal(x, y, playerColor) {
  var count = 0;
  var i = 1;
  while (i < 4 && x + i * 100 <= 700 && y + i * 100 <= 600) {
    var nextCell = document.elementFromPoint(x + i * 100, y + i * 100);
    if (nextCell.style.fill === playerColor) {
      count++;
      i++;
    } else {
      break;
    }
  }
  if (count >= 3) {
    return true;
  }

  count = 0;
  i = 1;
  while (i < 4 && x - i * 100 >= 100 && y + i * 100 <= 600) {
    var nextCell = document.elementFromPoint(x - i * 100, y + i * 100);
    if (nextCell.style.fill === playerColor) {
      count++;
      i++;
    } else {
      break;
    }
  }
  if (count >= 3) {
    return true;
  }

  return false;
}