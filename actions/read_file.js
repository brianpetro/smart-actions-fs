/**
 * @openapi
 * /read-file:
 *   get:
 *     operationId: read_file
 *     summary: Read a file
 *     description: Read a file from the vault
 *     parameters:
 *       - name: file_path
 *         in: query
 *         required: true
 *         description: The file to read
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 path:
 *                   type: string
 *                   description: The file path
 *                 content:
 *                   type: string
 *                   description: The file contents
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */
async function read_file(env, params) {
  const file_path = params.file_path;
  const file_type = file_path.split('.').pop();
  console.log({file_type});
  try {
    const resp = {
      path: file_path,
      content: '',
    };
    switch(file_type) {
      case 'pdf':
        const file_name = file_path.split('/').pop();
        resp.name = file_name;
        resp.mime_type = 'application/pdf';
        resp.content = env.fs.readFileSync(file_path, 'base64');
        break;
      default:
        resp.content = (await env.fs.readFile(file_path)).toString();
    }
    // console.log(content); // ChatGPT can read this buffer, cool!
    return resp;
  } catch (err) {
    console.log({...err});
    // if ENOENT, return 404
    return {
      path: file_path,
      error: err.message,
      ...err,
    };
  }
}
// exports.read_file = read_file; // standard export
// default functions export
// exports.func = read_file;
const openapi = {
  "openapi": "3.0.0",
  "paths": {
    "/read-file": {
      "get": {
        "operationId": "read_file",
        "summary": "Read a file",
        "description": "Read a file from the vault",
        "parameters": [
          {
            "name": "file_path",
            "in": "query",
            "required": true,
            "description": "The file to read",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "The file",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "path": {
                      "type": "string",
                      "description": "The file path"
                    },
                    "content": {
                      "type": "string",
                      "description": "The file contents"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "File not found"
          },
          "500": {
            "description": "Server error"
          }
        }
      }
    }
  }
};

export {
  openapi,
  read_file
};