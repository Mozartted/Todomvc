/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoStoreService } from './todo-store.service';

describe('TodoStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStoreService]
    });
  });

  it('should ...', inject([TodoStoreService], (service: TodoStoreService) => {
    expect(service).toBeTruthy();
  }));
});
