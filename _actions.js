// import _defaults from './actions/_components.js';
// import fs from 'fs';
// import path from 'path';
// // const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const _defaults = JSON.parse(fs.readFileSync(path.resolve('./actions', '_components.json'), 'utf8'));
import {_components} from './actions/_components.js';
import * as create_file from './actions/create_file.js';
import * as list_files from './actions/list_files.js';
import * as list_folders from './actions/list_folders.js';
import * as read_file from './actions/read_file.js';

const group_name = 'fs';
const group_dir = 'fs';
const repo_url = 'https://github.com/brianpetro/smart-actions-fs';
export default {
  group_name,
  group_dir,
  repo_url,
  _components,
  create_file,
  list_files,
  list_folders,
  read_file
};
