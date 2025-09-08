// Import packages (ESM style)
import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";

// Data pribadi
const fullName = "NAMA LENGKAP ANDA";
const nim = "NIM ANDA";

// 1. Tampilkan Nama dan NIM dengan warna (chalk)
console.log(
  chalk.blue.bold("Nama  : ") + chalk.greenBright(fullName)
);
console.log(
  chalk.blue.bold("NIM   : ") + chalk.yellowBright(nim)
);

// 2. Motivational message dengan cowsay
console.log(
  cowsay.say({
    text: "Keep going, success is near!",
    e: "oO", // 'e' adalah mata. 'oO' membuatnya terlihat berpikir
    T: "U ", // 'T' adalah lidah
    f: "octopus"
  })
);

// 3. Nama dalam ASCII art dengan figlet
figlet(fullName, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.magentaBright(data));
});
