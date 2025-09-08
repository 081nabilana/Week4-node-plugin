
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import dayjs from 'dayjs';

const defaultData = "Nabika Noor Azizah - F1D022081";
const inputData = process.argv[2] || defaultData;
const [nama, nim] = inputData.split(' - ');

const infoBox = boxen(
  `${chalk.green.bold('Nama:')} ${chalk.green(nama)}\n${chalk.green.bold('NIM:')}  ${chalk.green(nim)}`,
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    title: 'Informasi Mahasiswa',
    titleAlignment: 'center',
    textAlignment: 'left'
  }
);
console.log(infoBox);

const motivationalMessage = "Akan kuhadapi skripsi, tapi ntar, tidur dulu ^0^";
const octopusAscii = cowsay.say({
  text: motivationalMessage,
  f: "octopus"
});

const lines = octopusAscii.split("\n");
let bubbleEndIndex = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("----")) {
    bubbleEndIndex = i;
    break;
  }
}

const bubbleLines = lines.slice(0, bubbleEndIndex + 1);
const animalLines = lines.slice(bubbleEndIndex + 1);
console.log(chalk.black(bubbleLines.join("\n")));
console.log(chalk.red(animalLines.join("\n")));

try {
  const asciiArt = figlet.textSync(nama || 'Nama Anda', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  });

  console.log(gradient.pastel(asciiArt));
} catch (err) {
  console.log('Terjadi kesalahan saat membuat ASCII Art...');
  console.dir(err);
}

const now = dayjs().format('DD MMMM YYYY, HH:mm:ss');
console.log(chalk.gray(`\nScript dijalankan pada: ${now}`));
