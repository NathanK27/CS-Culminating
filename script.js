b = [40, 80, 120, 160, 200, 240, 280, 320, 360] //coordinates for a

function setup () {
  createCanvas(400, 400)
  background(0)
  fill(255)
  textSize(50)
  text("SpaceShooter", 50, 200)
}

let x = 200 // x-coordinate of the ship
let y = 250 // y-coordinate of the ship

let a = 200 // x-coordinate of the bullet
let c = 25 // y-coordinate of the bullet
let d = 1 // Speed of the bullet

let h = 5 // Hearts
let s = 0 // Score
let m = 0 // Money

// Bullet Speed Increment Variables
let id10 = false
let id20 = false
let id30 = false
let id40 = false
let id50 = false
let id60 = false
let id70 = false

//Spaceship
function ship(x, y) {
  fill(255, 0, 0)
  triangle(x, y, x - 25, y + 75, x + 25, y + 75)
  fill(135, 206, 235)
  triangle(x + 15, y + 65, x + 10, y + 30, x + 75, y + 100)
  triangle(x - 15, y + 65, x - 10, y + 30, x - 75, y + 100)
  fill(255)
}

function upgrade() {
  if (m >= 10) {
    d -= 0.1
    m -= 10
  }
}

function draw() {
  let button = createButton('Slower Bullets')
  button.position(10, 370)
  button.mousePressed(upgrade)
  ellipse(a, c, 25)
  c += d
  ship(x, y)
  fill(255)
  text(h, 10, 50)
  text(s, 10, 100)
  text(m, 10, 150)
  if (c > 400) {
    c = 25
    h -= 1
    a = random(b)
    background(0)
  }
  if (s == 10) {
    if (!id10) {
      d += 0.5
      id10 = true
    }
  }
  else if (s == 20) {
    if (!id20) {
      d += 0.5
      id20 = true
    }
  }
  else if (s == 30) {
    if (!id30) {
      d += 0.5
      id30 = true
    }
  }
  else if (s == 40) {
    if (!id40) {
      d += 0.5
      id40 = true
    }
  }
  else if (s == 50) {
    if (!id50) {
      d += 0.5
      id50 = true
    }
  }
  else if (s == 60) {
    if (!id60) {
      d += 0.5
      id60 = true
    }
  }
  else if (s == 70) {
    if (!id70) {
      d += 0.5
      id70 = true
    }
  }
  if (h <= 0) {
    background(0)
    text("Game Over:", 40, 200)
    text(s, 320, 200)
  }
}

//Controls
function keyPressed() {
  if (keyCode == 65) {
    x -= 40
    background(0)
  } //Move Left (A)
  if (keyCode == 68) {
    x += 40
    background(0)
  } //Move Right (D)
  if (keyCode == 87) {
    fill(255, 0, 255)
    rect(x - 5, 0, 10, 250)
    if (c < 250) {
      if (x == a) {
        background(0)
        rect(x - 5, 0, 10, 250)
        a = random(b)
        c = 25
        s += 1
        m += 1
      }
    }
  } //Shoot (W'd)
  if (keyCode == 13) {
    x = 200
    y = 250
    a = 200
    c = 25
    d = 1
    h = 5
    s = 0
    background(0)
  } //Reset Game (Enter)
}
