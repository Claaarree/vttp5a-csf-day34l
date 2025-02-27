import { Component, OnInit } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  photos: any[] = []
  sub$!: Subscription;

  constructor(private fakerySvc: FakeryService) {}

  async ngOnInit(): Promise<void> {
    // this.fakerySvc.getFakeryPhotos().then(photo => {
    //   this.photos.push(photo)
    // })
    // .catch(error => {
    //   console.error(error)
    // })
    this.sub$ = this.fakerySvc.getFakeryPhotos().subscribe({
      next: (data) => {this.photos.push(...data)},
      error: (error) => {console.error(error)},
      complete: () => {this.sub$.unsubscribe()}
    })
    console.log(this.photos)
  }

}
