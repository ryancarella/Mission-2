import {mkdir,copyFile,readFile,rm} from 'node:fs/promises';
import {validate} from '../analytics.mjs';
const data=JSON.parse(await readFile(new URL('../data/competitor_data.json',import.meta.url),'utf8'));validate(data);
await mkdir('dist/data',{recursive:true});for(const file of ['index.html','styles.css','app.js','analytics.mjs','data/competitor_data.json'])await copyFile(file,'dist/'+file);await copyFile('.nojekyll','dist/.nojekyll');console.log('Production build complete: dist/ · 4 competitors · 10 pricing offers.');
