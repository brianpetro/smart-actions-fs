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
async function list_folders({env, ...params}) {
  const { folder_path = '/' } = params;
  const fs = params.fs;
  const folders = await fs.list_folders(folder_path);
  return { folders };
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