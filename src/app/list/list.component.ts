import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  collection: any[] = [];

  constructor(private getdata: RestoService) { }

  ngOnInit(): void {
    this.getdata.getlist().subscribe((res:any) => {
      this.collection = res;
    });
  }

  deleteresto(item: any) {
    const index = this.collection.findIndex((element) => element.id === item.id);
    if (index !== -1) {
      this.collection.splice(index, 1);
      this.getdata.deleterestodata(item.id).subscribe((result) => {
        console.log(result);
      });
    }
  }
}
