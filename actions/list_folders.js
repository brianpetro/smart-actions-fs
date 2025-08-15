/**
 * @openapi
 * /list-folders:
 *   get:
 *     operationId: list_folders
 *     summary: List all folders
 *     parameters:
 *       - name: folder_path
 *         in: query
 *         description: The folder to list folders from
 *         schema:
 *           type: string
 *           default: /
 *     responses:
 *       200:
 *         description: A list of all folders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 folders:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: The folder name
 *                     example: /folder1
 */
/**
 * Retrieve folders within a directory.
 * @param {object} params
 * @param {object} params.env - Smart environment (unused)
 * @param {object} params.fs - Smart file system instance
 * @param {string} [params.folder_path="/"] - Folder to list folders from
 * @returns {Promise<{folders: string[]}>}
 */
async function list_folders({ env, fs, folder_path = '/' }) {
  const items = await fs.list_folders(folder_path);
  return { folders: items.map(item => item.path) };
}
// exports.list_folders = list_folders; // standard export
// default function export
// exports.func = list_folders;
const openapi = {
  "openapi": "3.1.0",
  "paths": {
    "/list-folders": {
      "get": {
        "description": "List all folders",
        "operationId": "list_folders",
        "parameters": [
          {
            "name": "folder_path",
            "in": "query",
            "description": "The folder to list folders from",
            "schema": {
              "type": "string",
              "default": "/"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "A list of all folders",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "folders": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export {
  list_folders,
  openapi,
};
export default list_folders;