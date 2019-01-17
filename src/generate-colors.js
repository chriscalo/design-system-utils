const { scales } = require("./color-scales");

const fs = require("fs-extra");
const path = require("path");

const outputFile = path.join(__dirname, "../dist/colors.scss");
const output = [
  `// Auto-generated colors, do not modify`,
];

Object.entries(scales).forEach(([colorName, scale]) => {
  output.push(``); // empty line between colors
  output.push(`// ${scale.colorName} color scale:`);
  const values = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  ];
  const scss = values.map(value => `$${colorName}-${value}: ${scale(value)};`);
  output.push(scss.join("\n"));
});

// for new line ending
output.push(``);

const content = output.join("\n");
fs.outputFileSync(outputFile, content);
