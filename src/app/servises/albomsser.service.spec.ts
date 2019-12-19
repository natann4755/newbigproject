import { TestBed } from '@angular/core/testing';

import { AlbomsserService } from './albomsser.service';

describe('AlbomsserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbomsserService = TestBed.get(AlbomsserService);
    expect(service).toBeTruthy();
  });
});
