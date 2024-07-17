import test from 'ava';
import { init_test_env } from '../test/_env.js';
import { list_folders } from './list_folders.js';

test.beforeEach(async t => {
  t.context.env = init_test_env(t);
})

test('returns only folders', async t => {
  // Arrange
  const expectedFolders = ['.hidden_folder', 'existing_folder'];

  // Act
  const result = await list_folders(t.context.env, { folder_path: '/' });

  // Assert
  t.deepEqual(result.folders, expectedFolders, 'Should return only folders');
});