import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editResto = new FormGroup({
    name: new FormControl(''),
    bid: new FormControl(),
    duration: new FormControl(),
    description: new FormControl(''),
    image: new FormControl(),
    email: new FormControl(''),
    address: new FormControl()
  });

  res: any = {};

  constructor(private route: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getCurdata(this.route.snapshot.params['id']).subscribe((response) => {
      this.res = response;

      this.editResto.patchValue({
        name: this.res.name,
        bid: this.res.starting_bid,
        duration: this.res.duration,
        description: this.res.description,
        image: this.res.image,
        email: this.res.email,
        address: this.res.address,
      });
    });
  }

  alart: boolean = false;

  updatecollection() {
    this.resto.getupdarevalue(this.route.snapshot.params['id'], this.editResto.value).subscribe((val) => {
      console.log(val);
      this.alart = true;
    });
    this.editResto.reset({});
  }

  updatealert() {
    this.alart = false;
  }

}
