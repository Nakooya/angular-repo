import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private url = 'https://localhost:7025/api/products/'

  constructor(private http: HttpClient) { }

  getData():Observable<Products[]>{
    return this.http.get<Products[]>(this.url);
  }
}
