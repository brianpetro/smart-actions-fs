const _components = {
  "components": {
    "schemas": {
      "file_name": {
        "type": "string",
        "description": "The name of the file."
      },
      "file_folder": {
        "type": "string",
        "description": "The folder of the file."
      },
      "file_mtime": {
        "type": "string",
        "description": "The last modified time of the file in milliseconds."
      },
      "file_size": {
        "type": "string",
        "description": "The size of the file in bytes."
      },
      "file_path": {
        "type": "string",
        "description": "The unique identifier for the file."
      },
      "file_content": {
        "type": "string",
        "description": "The content of a file."
      },
      "file": {
        "type": "object",
        "properties": {
          "path": {
            "$ref": "#/components/schemas/file_path"
          },
          "content": {
            "$ref": "#/components/schemas/file_content"
          }
        }
      },
      "file_meta": {
        "type": "object",
        "properties": {
          "name": {
            "$ref": "#/components/schemas/file_name"
          },
          "folder": {
            "$ref": "#/components/schemas/file_folder"
          },
          "mtime": {
            "$ref": "#/components/schemas/file_mtime"
          },
          "size": {
            "$ref": "#/components/schemas/file_size"
          }
        }
      },
      "error": {
        "type": "object",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The error message."
          },
          "status": {
            "type": "string",
            "description": "The status of the response."
          },
          "message": {
            "type": "string",
            "description": "The error message."
          }
        }
      }
    }
  }
}

export {_components};