export function format_openai_file_response(result) {
  if(result.mime_type) {
    result = {openaiFileResponse: [result]};
  }
  if(Array.isArray(result) && result.some(r => r.mime_type)){
    const new_result = {
      openaiFileResponse: result.filter(r => r.mime_type).map(r => r),
    };
    const remaining_results = result.filter(r => !r.mime_type);
    if(remaining_results.length > 0) new_result.content = remaining_results;
    result = new_result;
  }
  return result;
}
