import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputRichTextComponent} from './input-rich-text.component';
import {InputRichTextToolbarComponent} from './input-rich-text-toolbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AeSelectComponent} from './ae-select/ae-select.component';
import {InputRichTextModule} from './input-rich-text.module';

describe('AngularEditorComponent', () => {
  let component: InputRichTextComponent;
  let fixture: ComponentFixture<InputRichTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule],
      declarations: [InputRichTextComponent, InputRichTextToolbarComponent, AeSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRichTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
