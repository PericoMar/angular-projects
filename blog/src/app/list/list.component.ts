import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports : [RouterModule, CommonModule],
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
    this.postService.getAll().subscribe({
      next : (data) => {
        this.posts = data; // Asigna los posts obtenidos del servicio a la variable posts
      },
      error : (error) => {
        console.error('Error al obtener los posts:', error);
      }
    });
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
    })
  }

}
