import {Component, OnInit} from '@angular/core';
import {IRichTextConfig} from '../../../angular-editor/src/lib/config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  htmlContent1 = '';
  htmlContent2 = '';

  config1: IRichTextConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    textPlaceholder: 'Enter text here...',
    codePlaceholder: 'Enter code here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Open Sans',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
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
      // {
      //   label: 'Small',
      //   value: 'small',
      // },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'bottom'
  };

  config2: IRichTextConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    textPlaceholder: 'Enter text here...',
    codePlaceholder: 'Enter code here...',
    translate: 'no',
    sanitize: true,
    toolbarPosition: 'bottom',
    defaultFontName: 'Comic Sans MS',
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      signature: ['', Validators.required]
    });
    console.log(this.htmlContent1);
  }

  onChange(event) {
    // console.log('changed');
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(event) {
    console.warn(this.form.value);
  }
}
