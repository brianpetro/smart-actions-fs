/**
 * @openapi
 * /list_files:
 *   get:
 *     operationId: list_files
 *     summary: List all files in a folder
 *     parameters:
 *       - name: folder_path
 *         in: query
 *         required: true
 *         description: The folder to list files from
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of all files
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
async function list_files(env, params) {
  const { folder_path = '' } = params;
  const fs = env.fs;
  const files = await fs.list(folder_path);
  return { files };
}
// exports.list_files = list_files; // standard export
// default function export
// exports.func = list_files;

const openapi = {
  "openapi": "3.1.0",
  "paths": {
    "/list-files": {
      "get": {
        "description": "List all files in a folder",
        "operationId": "list_files",
        "parameters": [
          {
            "name": "folder_path",
            "in": "query",
            "required": true,
            "description": "The folder to list files from",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "A list of all files",
            "content": {
              "application/json": {
                "schema": {
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

export {
  openapi,
  list_files
};