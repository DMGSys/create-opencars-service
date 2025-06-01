#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("❌ Tenés que indicar el nombre del proyecto.");
  process.exit(1);
}

const projectName = args[0];
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`❌ La carpeta "${projectName}" ya existe.`);
  process.exit(1);
}

fs.mkdirSync(projectPath);
console.log(`📁 Creando proyecto en: ${projectPath}`);

const templatePath = __dirname;
const filesToCopy = fs.readdirSync(templatePath).filter(f => !["cli.js", "cli-commonjs.js", ".git", "node_modules"].includes(f));

filesToCopy.forEach(file => {
  const src = path.join(templatePath, file);
  const dest = path.join(projectPath, file);

  if (fs.statSync(src).isDirectory()) {
    fs.cpSync(src, dest, { recursive: true });
  } else {
    fs.copyFileSync(src, dest);
  }
});

const packageJsonPath = path.join(projectPath, "package.json");
if (fs.existsSync(packageJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  pkg.name = projectName;
  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
}

console.log("📦 Instalando dependencias...");
execSync("npm install", { cwd: projectPath, stdio: "inherit" });

console.log(`\n🚗 Proyecto OpenCars creado con éxito 🎉`);
console.log(`👉 Ejecutá:\n  cd ${projectName}\n  npm run dev`);
