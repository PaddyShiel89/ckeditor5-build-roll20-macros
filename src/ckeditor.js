/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";

import InsertImage from "./plugins/InsertImage/InsertImage";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Bold,
	Italic,
	Essentials,
	Image,
	InsertImage,
	Link,
	Paragraph,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"bold",
			"italic",
			"link",
			"insertImage",
			"|",
			"undo",
			"redo",
		],
	},
	// image: {
	// 	toolbar: [
	// 		'imageStyle:full',
	// 		'imageStyle:side',
	// 		'|',
	// 		'imageTextAlternative'
	// 	]
	// },
	// table: {
	// 	contentToolbar: [
	// 		'tableColumn',
	// 		'tableRow',
	// 		'mergeTableCells'
	// 	]
	// },
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
