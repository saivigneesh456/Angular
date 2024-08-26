import { Router } from '@angular/router';

constructor(private router: Router) {}

selectTask(task: any) {
  this.router.navigate(['/tasks', task.id]);
}
