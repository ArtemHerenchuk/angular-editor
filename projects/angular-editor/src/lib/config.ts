export interface CustomClass {
  name: string;
  class: string;
  tag?: string;
}

export interface Font {
  name: string;
  class: string;
  value: string;
}

export interface ICustomBtn {
  id: string;
  ico: string; // font awesome ico
  title: string;
}

export interface ITag {
  label: string;
  value: string;
}

export type toolbarPosition = 'top' | 'bottom';

export type hasTranslate = 'yes' | 'no';

export interface IRIchTextConfig {
  editable?: boolean;
  customButtons?: ICustomBtn[];
  spellcheck?: boolean;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  translate?: hasTranslate;
  enableToolbar?: boolean;
  showToolbar?: boolean;
  textPlaceholder?: string;
  codePlaceholder?: string;
  defaultParagraphSeparator?: string;
  defaultFontName?: string;
  defaultTag?: string;
  defaultColor?: string;
  defaultBackgroundColor?: string;
  uploadUrl?: string;
  uploadWithCredentials?: boolean;
  fonts?: Font[];
  tags?: ITag[],
  customClasses?: CustomClass[];
  sanitize?: boolean;
  toolbarPosition?: toolbarPosition;
  outline?: boolean;
  toolbarHiddenButtons?: btnId[][];
}

export const initRichTextConfig: IRIchTextConfig = {
  editable: true,
  customButtons: [],
  spellcheck: true,
  height: 'auto',
  minHeight: '0',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  textPlaceholder: 'Enter text here...',
  codePlaceholder: 'Enter code here...',
  defaultParagraphSeparator: 'p',
  defaultFontName: 'Open Sans, sans-serif',
  defaultTag: 'p',
  defaultColor: '#333',
  defaultBackgroundColor: '#fff',
  tags: [
    {
      label: 'Paragraph',
      value: 'p',
    },
    {
      label: 'Heading 1',
      value: 'h1',
    },
    {
      label: 'Heading 2',
      value: 'h2',
    },
    {
      label: 'Heading 3',
      value: 'h3',
    },
    {
      label: 'Heading 4',
      value: 'h4',
    },
    {
      label: 'Small',
      value: 'small',
    },
  ],
  fonts: [
    {class: 'open-sans', name: 'Open Sans', value: 'Open Sans, sans-serif'},
    {class: 'arial', name: 'Arial', value: 'Arial'},
    {class: 'times-new-roman', name: 'Times New Roman', value: 'Times New Roman'},
    {class: 'calibri', name: 'Calibri', value: 'Calibri'},
    {class: 'comic-sans-ms', name: 'Comic Sans MS', value: 'Comic Sans MS'}
  ],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  outline: true,
  /*toolbarHiddenButtons: [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['heading', 'fontName', 'color'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
    ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
    ['link', 'unlink', 'image', 'video']
  ]*/
};

export type btnId = 'undo' |
  'redo' |
  'bold' |
  'italic' |
  'underline' |
  'strikeThrough' |
  'subscript' |
  'superscript' |
  'justifyLeft' |
  'justifyCenter' |
  'justifyRight' |
  'justifyFull' |
  'indent' |
  'outdent' |
  'insertUnorderedList' |
  'insertOrderedList' |
  'heading' |
  'fontName' |
  'fontSize' |
  'textColor' |
  'backgroundColor' |
  'customClasses' |
  'link' |
  'unlink' |
  'insertImage' |
  'insertVideo' |
  'insertHorizontalRule' |
  'removeFormat' |
  'toggleEditorMode' |
  'toggleHiddenButtons' |
  string;
