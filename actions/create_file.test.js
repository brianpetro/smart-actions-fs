import test from 'ava';
import { SmartFs } from '../../jsbrains/smart-fs/smart_fs.js';
import { SmartFsTestAdapter } from '../../jsbrains/smart-fs/adapters/_test.js';
import create_file from './create_file.js';

class NoUpdateAdapter extends SmartFsTestAdapter {
  async write(rel_path, content) {
    const dir_path = rel_path.split(this.sep).slice(0, -1).join(this.sep);
    if (dir_path) {
      await this.mkdir(dir_path, { recursive: true });
    }
    this.files[rel_path] = content;
  }
}

test('create_file adds file to smart_fs', async t => {
  const env = {};
  const fs = new SmartFs(env, { adapter: NoUpdateAdapter });
  await fs.init();
  await create_file({ env, fs, file_path: 'note.md', content: '# hi' });
  t.truthy(fs.files['note.md']);
});
