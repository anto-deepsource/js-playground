import { analyzeDirectory } from './driver';
import path = require('path');

let a = 1

analyzeDirectory(path.join(__dirname, '..', 'example', 'sample-project'));
