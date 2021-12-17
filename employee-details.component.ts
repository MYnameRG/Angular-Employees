import { EmployeeService } from './../services/employee.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  posts: any;

  constructor(private service: EmployeeService) { }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe({
        next: (data) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }
        ,
        error: (err: Response) => {
          if (err.status == 400) alert('Post already deleted..');
          else alert('Unexcepected Errors');
        }
      }
      );
  }

  editPost(post: any) {
    let index = this.posts.indexOf(post);
    let title = '';
    let change = prompt('You want to edit?', title);
    post.title = change;
    this.posts.splice(index, 1, post);
    this.service.updatePost(post)
    .subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe({
        next: (data) => {
          this.posts = JSON.parse(JSON.stringify(data));
        },
        error: (err) => {
          alert('Unexpected Errors');
          console.log(err.message);
        }
      })
  }
}
