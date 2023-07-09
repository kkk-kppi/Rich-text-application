/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

// all config, see https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html
// eslint-disable-next-line no-undef
CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here. For example:

  // language setting, see https://ckeditor.com/docs/ckeditor4/latest/features/uilanguage.html
  // config.defaultLanguage = 'de'; // setting default langage 'de', ckeditor default 'en'
  // config.language = 'fr'; // force langage 'fr'

  // UI color, see https://ckeditor.com/docs/ckeditor4/latest/features/uicolor.html
  // config.uiColor = '#AADC6E';

  // see https://ckeditor.com/docs/ckeditor4/latest/features/editorplaceholder.html
  // config.editorplaceholder = 'Type your comment…'; // ''set empty string, it will disable the placeholder

  // toolbar config
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'about', groups: [ 'about' ] },
		'/',
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'links', groups: [ 'links' ] },
		'/',
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'basicstyles', groups: [ 'cleanup', 'basicstyles' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'others', groups: [ 'others' ] }
	];
  // remove buttons
  config.removeButtons = 'Language,ShowBlocks';

  // 启用额外插件
  config.extraPlugins = 'uploads'
}
