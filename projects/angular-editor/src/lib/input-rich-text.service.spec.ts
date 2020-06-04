import {inject, TestBed} from '@angular/core/testing';

import {InputRichTextService} from './input-rich-text.service';
import {HttpClientModule} from '@angular/common/http';

describe('AngularEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [InputRichTextService]
    });
  });

  it('should be created', inject([InputRichTextService], (service: InputRichTextService) => {
    expect(service).toBeTruthy();
  }));
});
