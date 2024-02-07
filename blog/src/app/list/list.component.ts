import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';

@Component({
  standalone: true,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: any[] = []; // Aquí almacenaremos la lista de posts

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts(); // Llama al método para obtener todos los posts al inicializar el componente
  }

  getAllPosts() {
    this.postService.getAll().subscribe(
      (data) => {
        this.posts = data; // Asigna los posts obtenidos del servicio a la variable posts
      },
      (error) => {
        console.error('Error al obtener los posts:', error);
      }
    );
  }
}
