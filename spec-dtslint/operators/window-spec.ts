import { of } from 'rxjs';
import { windowOperator } from 'rxjs/operators';

it('should infer correctly', () => {
  of(1).pipe(windowOperator(of('1'))); // $ExpectType Observable<Observable<number>>
});

it('should enforce types', () => {
  of(1).pipe(windowOperator('')); // $ExpectError
});
