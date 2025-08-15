import { SmartFs } from "../../jsbrains/smart-fs/smart_fs.js";
import { SmartFsTestAdapter } from "../../jsbrains/smart-fs/adapters/_test.js";

/**
 * Initialize SmartFs test environment.
 * @returns {Promise<{env: object, fs: SmartFs}>}
 */
export async function init_test_env() {
  const env = {};
  const fs = new SmartFs(env, { adapter: SmartFsTestAdapter });
  await fs.init();
  await fs.write("file.md", "# root");
  await fs.write("existing_folder/note.md", "# note");
  await fs.adapter.mkdir(".hidden_folder");
  return { env, fs };
}
