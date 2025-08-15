import test from 'ava';
import { init_test_env } from '../test/_env.js';
import { list_files } from './list_files.js';

test.beforeEach(async t => {
  t.context.env = await init_test_env();
});

test('lists files in root', async t => {
  const result = await list_files(t.context.env);
  t.deepEqual(result.files, ['file.md']);
});

test('lists files in a folder', async t => {
  const result = await list_files({ ...t.context.env, folder_path: 'existing_folder' });
  t.deepEqual(result.files, ['existing_folder/note.md']);
});
