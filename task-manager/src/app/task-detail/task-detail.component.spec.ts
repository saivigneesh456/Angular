import { ActivatedRoute } from '@angular/router';
import { constructor } from 'assert';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const taskId = this.route.snapshot.paramMap.get('id');
  this.task = this.tasks.find(t => t.id === parseInt(taskId, 10));
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

