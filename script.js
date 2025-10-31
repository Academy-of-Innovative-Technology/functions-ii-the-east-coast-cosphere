// Basic Operations - Example //
// if you wish to use for the select menu //
function handleBasicOperation(type, num1, num2) {
  let result;

  switch (type) {
    case "add":
      result = num1 + num2;
      break;

    case "substract":
      result = num1 - num2;

      break;
    case "multiply":
      result = num1 * num2;
      break;

    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;

    case "modulus":
      result = num1 % num2;
      break;

    default:
      result = "Invalid operation";
  }

  console.log(num1);

  document.getElementById("basicResult").textContent = `Result: ${result}`;
}

document.querySelector("#Add_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("add", Number(X), Number(Y));
});
document.querySelector("#Substract_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("substract", Number(X), Number(Y));
});
document.querySelector("#Multiply_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("multiply", Number(X), Number(Y));
});
document.querySelector("#Divide_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("divide", Number(X), Number(Y));
});
document.querySelector("#Modulus_BTN").addEventListener("click", () => {
  let X = document.querySelector("#num1").value;
  let Y = document.querySelector("#num2").value;
  handleBasicOperation("modulus", Number(X), Number(Y));
});

// Math Formula Handlers

function Rentangle_Area(Length, Width){
  let Formula = Length * Width;
  return Formula
}
document.querySelector("#Area_Rectangle_BTN").addEventListener("click", () => {
  let Length = parseFloat(document.querySelector("#rectLength").value) || 1;
  let Height = parseFloat(document.querySelector("#rectWidth").value) || 1;
  document.querySelector("#rectResult").innerHTML = Rentangle_Area(Length, Height);
})

function Area_Circle(Radius){
  let Formula = Math.PI * Radius**2;
  return Formula
}
document.querySelector("#Area_Circle_BTN").addEventListener("click", () => {
  let Radius = parseFloat(document.querySelector("#circleRadius").value) || 1;
  document.querySelector("#circleResult").innerHTML = Area_Circle(Radius);
})


function Pythagorean_Theorem(Side_A, Side_B){
  let Formula = Math.sqrt(Side_A**2 + Side_B**2);
  return Formula
}
document.querySelector("#Pythagorean_Theorem_BTN").addEventListener("click", () => {
  let Side_A = parseFloat(document.querySelector("#sideA").value) || 1;
  let Side_B = parseFloat(document.querySelector("#sideB").value) || 1;
  document.querySelector("#pythagoreanResult").innerHTML = Pythagorean_Theorem(Side_A, Side_B);
})

function Interest(Principal, Rate_Percentage, Years){
  let Formula = Principal * Rate_Percentage * Years / 100;
  return Formula
}
document.querySelector("#Interest_BTN").addEventListener("click", () => {
  let Principal = parseFloat(document.querySelector("#principal").value) || 1;
  let Rate_Percentage = parseFloat(document.querySelector("#rate").value) || 1;
  let Years = parseFloat(document.querySelector("#time").value) || 1;
  document.querySelector("#interestResult").innerHTML = Interest(Principal, Rate_Percentage, Years);
})



function Power(Base, Exponent){
  let Formula = Base ** Exponent;
  return Formula
}
document.querySelector("#Power_BTN").addEventListener("click", () => {
  let Base = parseFloat(document.querySelector("#base").value) || 1;
  let Exponent = parseFloat(document.querySelector("#exponent").value) || 1;
  document.querySelector("#powerResult").innerHTML = Power(Base, Exponent);
})


function Perimeter_Rectangle(Length, Width){
  let Formula = 2*(Length + Width);
  return Formula
}
document.querySelector("#Perimeter_Rectangle_BTN").addEventListener("click", () => {
  let Length = parseFloat(document.querySelector("#periLength").value) || 1;
  let Width = parseFloat(document.querySelector("#periWidth").value) || 1;
  document.querySelector("#perimeterResult").innerHTML = Perimeter_Rectangle(Length, Width);
})


function Circumference_Circle(Radius){
  let Formula = 2 * Math.PI * Radius;
  return Formula
}
document.querySelector("#Circumference_Circle_BTN").addEventListener("click", () => {
  let Radius = parseFloat(document.querySelector("#circRadius").value) || 1;
  document.querySelector("#circumferenceResult").innerHTML = Circumference_Circle(Radius);
})

function Area_Triangle(Base, Height){
  let Formula = (Base * Height) / 2;
  return Formula
}
document.querySelector("#Area_Triangle_BTN").addEventListener("click", () => {
  let Base = parseFloat(document.querySelector("#triangleBase").value) || 1;
  let Height = parseFloat(document.querySelector("#triangleHeight").value) || 1;
  document.querySelector("#triangleAreaResult").innerHTML = Area_Triangle(Base, Height);
})

function Volume_Cube(Side){
  let Formula = Side**3;
  return Formula
}
document.querySelector("#Volume_Cube_BTN").addEventListener("click", () => {
  let Side = parseFloat(document.querySelector("#cubeSide").value) || 1;
  document.querySelector("#cubeVolumeResult").innerHTML = Volume_Cube(Side);
})


function Volume_Prism(Length, Width, Height){
  let Formula = Length * Width * Height;
  return Formula
}
document.querySelector("#Volume_Prism_BTN").addEventListener("click", () => {
  let Length = parseFloat(document.querySelector("#prismLength").value) || 1;
  let Width = parseFloat(document.querySelector("#prismWidth").value) || 1;
  let Height = parseFloat(document.querySelector("#prismHeight").value) || 1;
  document.querySelector("#prismVolumeResult").innerHTML = Volume_Prism(Length, Width, Height);
})

function Volume_Cylinder(Radius, Height){
  let Formula = Math.PI * (Radius**2) * Height;
  return Formula
}
document.querySelector("#Volume_Cylinder_BTN").addEventListener("click", () => {
  let Radius = parseFloat(document.querySelector("#cylRadius").value) || 1;
  let Height = parseFloat(document.querySelector("#cylHeight").value) || 1;
  document.querySelector("#triangleAreaResult").innerHTML = Volume_Cylinder(Radius, Height);
})

function Calculate_Speed(Distance, Time){
  let Formula = Distance / Time;
  return Formula
}
document.querySelector("#Calculate_Speed_BTN").addEventListener("click", () => {
  let Distance = parseFloat(document.querySelector("#distance").value) || 1;
  let Time = parseFloat(document.querySelector("#time").value) || 1;
  document.querySelector("#speedResult").innerHTML = Calculate_Speed(Distance, Time);
})


function Density(Mass, Volume){
  let Formula = Mass / Volume;
  return Formula
}
document.querySelector("#Density_BTN").addEventListener("click", () => {
  let Mass = parseFloat(document.querySelector("#mass").value) || 1;
  let Volume = parseFloat(document.querySelector("#volume").value) || 1;
  document.querySelector("#densityResult").innerHTML = Density(Mass, Volume);
})


function BMI(Weight, Height){
  let Formula = Weight / (Height**2);
  return Formula
}
document.querySelector("#BMI_BTN").addEventListener("click", () => {
  let Weight = parseFloat(document.querySelector("#weight").value) || 1;
  let Height = parseFloat(document.querySelector("#height").value) || 1;
  document.querySelector("#bmiResult").innerHTML = BMI(Weight, Height);
})


function Discriminant(A,B,C){
  let Formula = (B**2) - 4(A)(C);
  return Formula
}
document.querySelector("#Discriminant_BTN").addEventListener("click", () => {
  let A = parseFloat(document.querySelector("#a").value) || 1;
  let B = parseFloat(document.querySelector("#b").value) || 1;
  let C = parseFloat(document.querySelector("#c").value) || 1;
  document.querySelector("#discriminantResult").innerHTML = Discriminant(A, B, C);
})


