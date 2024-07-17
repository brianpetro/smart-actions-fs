/**
 * @openapi
 * /create-file:
 *   post:
 *     operationId: create_file
 *     summary: Create a file
 *     description: Create a file in the vault
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file_path:
 *                 type: string
 *                 description: The path where the file will be created
 *               content:
 *                 type: string
 *                 description: The content to write in the file
 *     responses:
 *       200:
 *         description: File created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 path:
 *                   type: string
 *                   description: The path of the created file
 *                 content:
 *                   type: string
 *                   description: The content of the created file
 *       404:
 *         description: Path not found
 *       500:
 *         description: Internal server error
 */
async function create_file(env, params) {
  const file_path = params.file_path;
  const content = params.content;
  try {
    await env.fs.writeFile(file_path, content);
  } catch (error) {
    return { error: error.message };
  }
  return { path: file_path, content };
}
// exports.create_file = create_file; // standard export
// default function export
// exports.func = create_file;

const openapi = {
  "openapi": "3.1.0",
  "paths": {
    "/create-file": {
      "post": {
        "summary": "Create a file",
        "operationId": "create_file",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "file_path": {
                    "type": "string"
                  },
                  "content": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "File created successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "path": {
                      "type": "string"
                    },
                    "content": {
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
};
export {
  openapi,
  create_file
};