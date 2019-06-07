import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WindTurbine } from './wind-turbine-item/wind-turbine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  turbines: WindTurbine[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/v1/list').subscribe((data: WindTurbine[]) => {
      this.turbines = data;
    });
  }

  onItemUpdated(item: WindTurbine) {
    this.http.put('http://localhost:8080/v1/list', item).subscribe((response: any) => {
      this.turbines = response.data;
    });
  }

  onItemDeleted(id: number) {
    this.http.delete(`http://localhost:8080/v1/list/${id}`).subscribe((response: any) => {
      this.turbines = response.data;
    });
  }

  addNewItem() {
    const emptyItem: WindTurbine = {
      id: Date.now(),
      name: '',
      enabled: false,
      speed: 0,
      power: 0,
      direction: ''
    };

    this.http.post('http://localhost:8080/v1/list', emptyItem).subscribe((response: any) => {
      this.turbines = response.data;
    });
  }
}
