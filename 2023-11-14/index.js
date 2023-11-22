
import Televizorius from './src/televizorius.js';

import chalk from 'chalk';

const tv =new Televizorius('Sony');
tv.setGarsas(10);
tv.setKanalas(5);
tv.gamyklinis();
console.log(chalk.blue(tv.statusas()));