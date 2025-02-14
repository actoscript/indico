// This file is part of Indico.
// Copyright (C) 2002 - 2022 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

export const getConfig = ({images = true, imageUploadURL = null} = {}) => ({
  removePlugins: images && imageUploadURL ? [] : ['ImageInsert', 'ImageUpload'],
  fontFamily: {
    options: [
      'Sans Serif/"Liberation Sans", sans-serif',
      'Serif/"Liberation Serif", serif',
      'Monospace/"Liberation Mono", monospace',
    ],
  },
  toolbar: {
    shouldNotGroupWhenFull: false,
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'link',
      'fontColor',
      'fontBackgroundColor',
      'removeFormat',
      '|',
      'bulletedList',
      'numberedList',
      'alignment',
      'outdent',
      'indent',
      '|',
      images && 'insertImage',
      'insertTable',
      '|',
      'subscript',
      'superscript',
      'blockQuote',
      'code',
      'horizontalLine',
      '|',
      'findAndReplace',
      'undo',
      'redo',
      '|',
      'sourceEditing',
    ].filter(Boolean),
  },
  plugins: [
    'Alignment',
    'Autoformat',
    images && 'AutoImage',
    'AutoLink',
    'BlockQuote',
    'Bold',
    'CloudServices',
    'Code',
    'CodeBlock',
    'Essentials',
    'FindAndReplace',
    'FontBackgroundColor',
    'FontColor',
    'GeneralHtmlSupport',
    'Heading',
    'HorizontalLine',
    images && 'Image',
    images && 'ImageCaption',
    images && !imageUploadURL && 'ImageInsertViaUrl',
    images && imageUploadURL && 'ImageInsert',
    images && 'ImageResize',
    images && 'ImageStyle',
    images && 'ImageToolbar',
    'Indent',
    'IndentBlock',
    'Italic',
    'Link',
    'List',
    images && 'MediaEmbed',
    'Paragraph',
    'PasteFromOffice',
    'RemoveFormat',
    images && imageUploadURL && 'SimpleUploadAdapter',
    'SourceEditing',
    'Strikethrough',
    'Subscript',
    'Superscript',
    'Table',
    'TableToolbar',
    'TableProperties',
    'TableCellProperties',
    'Underline',
  ].filter(Boolean),
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
    ],
  },
  htmlSupport: {
    allow: [
      {name: /^h[1-6]$/, styles: true},
      {name: 'p', styles: true},
      {name: 'dl', styles: true},
      {name: 'dt', styles: true},
      {name: 'dd', styles: true},
      {name: 'div', styles: true},
      {name: 'span', styles: true},
      {name: 'pre', styles: true},
      {
        name: 'img',
        attributes: {
          usemap: true,
        },
        styles: true,
      },
      {
        name: 'area',
        attributes: true,
        styles: true,
      },
      {
        name: 'map',
        attributes: true,
        styles: true,
      },
    ],
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: 'manual',
        label: 'Open in a new tab',
        defaultValue: false,
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
    },
  },
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'imageStyle:alignLeft',
      'imageStyle:alignRight',
    ],
  },
  simpleUpload:
    images && imageUploadURL
      ? {
          uploadUrl: imageUploadURL,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': document.getElementById('csrf-token').getAttribute('content'),
          },
        }
      : undefined,
});
