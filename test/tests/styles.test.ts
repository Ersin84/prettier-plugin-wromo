import { test } from '../test-utils';

const files = import.meta.glob('/test/fixtures/styles/*/*', {
	assert: { type: 'raw' },
});

test('Can format a basic Wromo file with styles', files, 'styles/with-styles');

test(
	'Can format an Wromo file with attributes in the <style> tag',
	files,
	'styles/style-tag-attributes'
);

test('Can format a basic Wromo file with .scss styles', files, 'styles/with-scss');

test('Can format .sass styles', files, 'styles/with-sass');

test(
	'Can format a basic Wromo file with styles written in .sass',
	files,
	'styles/with-indented-sass'
);

test('Can format nested style tag content', files, 'styles/format-nested-style-tag-content');

test(
	'Can format nested sass style tag content',
	files,
	'styles/format-nested-sass-style-tag-content'
);

// TODO: needs to fix in the compiler
// test(
//   'Can format a basic Wromo file with styles and a body tag',
//   files,
//   'styles/with-styles-and-body-tag'
// );
