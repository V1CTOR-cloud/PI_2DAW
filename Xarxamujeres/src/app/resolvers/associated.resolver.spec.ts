import { TestBed } from '@angular/core/testing';

import { AssociatedResolver } from './associated.resolver';

describe('AssociatedResolver', () => {
  let resolver: AssociatedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AssociatedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
