import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private restoService: RestoService) { }
  collection :any[] = []
  addResto = new FormGroup({
    name: new FormControl(''),
    bid: new FormControl(''),
    remainingtime: new FormControl(''),
    duration: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });

  alert: boolean = false;

  ngOnInit(): void {
  }

  collectdata() {
    this.restoService.postlist(this.addResto.value).subscribe((result) => {
      console.log(result);
      this.alert = true;
      // Add the new item to the collection
      this.restoService.getItems().subscribe((res: any) => {
        this.collection = res.items;
      });
    });
    this.addResto.reset({});
  }

  closealert() {
    this.alert = false;
  }
}
