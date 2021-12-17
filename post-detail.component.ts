import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  details: any = {};

  constructor(private route: ActivatedRoute, private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.service.getPostId(id).subscribe({
        next: (data) => { this.details = data },
        error: (err) => {
          alert('Unexpected Exception');
          console.log(err);
        }
      });
    })
  }

  back() {
    this.router.navigate(['']);
  }
}
