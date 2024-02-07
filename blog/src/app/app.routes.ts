import { Routes } from '@angular/router';
import { CreateComponent } from './post/create/create.component';
import { ReadComponent } from './post/read/read.component';
import { UpdateComponent } from './post/update/update.component';
import { DeleteComponent } from './post/delete/delete.component';
import { ListComponent  } from './list/list.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'read' , component: ReadComponent},
  { path: 'update' , component: UpdateComponent},
  { path: 'delete' , component: DeleteComponent}
];
