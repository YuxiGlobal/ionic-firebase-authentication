import { TestBed, inject } from '@angular/core/testing';

import { EmailAuthService } from './email-auth.service';

describe('EmailAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailAuthService]
    });
  });

  it('should be created', inject([EmailAuthService], (service: EmailAuthService) => {
    expect(service).toBeTruthy();
  }));
});
