function generateRandomQuadraticEquation() {
  // Generate random coefficients for the quadratic equation
  const a = getRandomCoefficient();
  const b = getRandomCoefficient();
  const c = getRandomCoefficient();
  return { a, b, c };
}

function calculateQuadraticSolutions(a, b, c) {
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
      // Two real and distinct solutions
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { type: "Real and Distinct", x1, x2 };
  } else if (discriminant === 0) {
      // One real solution (a repeated root)
      const x1 = -b / (2 * a);
      return { type: "Real and Repeated", x1 };
  } else {
      // Complex solutions (no real roots)
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      return { type: "Complex", x1: `${realPart} + ${imaginaryPart}i`, x2: `${realPart} - ${imaginaryPart}i` };
  }
}

function getRandomCoefficient() {
  return (Math.random() * 20 - 10).toFixed(2); // Generates random coefficients in the range [-10, 10]
}

const equation = generateRandomQuadraticEquation();
console.log(`Generated Quadratic Equation: ${equation.a}x^2 + ${equation.b}x + ${equation.c} = 0`);

const solutions = calculateQuadraticSolutions(equation.a, equation.b, equation.c);

if (solutions.type === "Real and Distinct") {
  console.log("Solutions:");
  console.log(`x1 = ${solutions.x1}`);
  console.log(`x2 = ${solutions.x2}`);
} else if (solutions.type === "Real and Repeated") {
  console.log("Solution:");
  console.log(`x1 = ${solutions.x1}`);
} else {
  console.log("Complex Solutions:");
  console.log(`x1 = ${solutions.x1}`);
  console.log(`x2 = ${solutions.x2}`);
}
