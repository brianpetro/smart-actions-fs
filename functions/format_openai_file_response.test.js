import test from 'ava';
import { format_openai_file_response } from './format_openai_file_response.js';
test('format_openai_file_response should handle single openai_file_response', t => {
  const input = { name: 'file1.pdf', mime_type: 'application/pdf' };
  const expected = { openaiFileResponse: [{ name: 'file1.pdf', mime_type: 'application/pdf' }] };
  const result = format_openai_file_response(input);
  t.deepEqual(result, expected);
});

test('format_openai_file_response should handle array of objects with openai_file_response', t => {
  const input = [
    { name: 'file1.pdf', mime_type: 'application/pdf' },
    { name: 'file2.pdf', mime_type: 'application/pdf' }
  ];
  const expected = { openaiFileResponse: [
    { name: 'file1.pdf', mime_type: 'application/pdf' },
    { name: 'file2.pdf', mime_type: 'application/pdf' }
  ]};
  const result = format_openai_file_response(input);
  t.deepEqual(result, expected);
});

test('format_openai_file_response should handle mixed array of objects', t => {
  const input = [
    { name: 'file1.pdf', mime_type: 'application/pdf' },
    { some_other_key: 'some_value' },
    { name: 'file2.pdf', mime_type: 'application/pdf' }
  ];
  const expected = {
    openaiFileResponse: [
      { name: 'file1.pdf', mime_type: 'application/pdf' },
      { name: 'file2.pdf', mime_type: 'application/pdf' }
    ],
    content: [
      { some_other_key: 'some_value' },
    ]
  };
  const result = format_openai_file_response(input);
  t.deepEqual(result, expected);
});

test('format_openai_file_response should return existing object if no openai_file_response', t => {
  const input = { some_other_key: 'some_value' };
  const expected = { some_other_key: 'some_value' };
  const result = format_openai_file_response(input);
  t.deepEqual(result, expected);
});

test('format_openai_file_response should handle empty input', t => {
  const input = {};
  const expected = {};
  const result = format_openai_file_response(input);
  t.deepEqual(result, expected);
});
