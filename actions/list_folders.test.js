import test from 'ava';
import { init_test_env } from '../test/_env.js';
import { list_folders } from './list_folders.js';

test.beforeEach(async t => {
  t.context.env = await init_test_env();
});

test('returns only folders', async t => {
  const expected_folders = ['existing_folder'];
  const result = await list_folders(t.context.env);
  t.deepEqual(result.folders, expected_folders, 'Should return only folders');
});