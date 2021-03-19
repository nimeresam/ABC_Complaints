import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../models/status.enum';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(status: STATUS): string {
    switch (status) {
      case STATUS.pending:
        return 'blue';
      case STATUS.resolved:
        return 'green';
      case STATUS.dismissed:
        return 'red';
    }
  }

}
