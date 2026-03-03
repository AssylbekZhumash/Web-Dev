import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

import { finalize } from 'rxjs/operators';

@Component({
  selector: "app-albums",
  standalone: true,
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"],
  imports: [CommonModule, RouterModule]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  errorMsg = '';

  constructor(private albumService: AlbumService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log("Initializing...", Date.now());
    this.loading = true;
    this.errorMsg = '';

    this.albumService.getAlbums()
      .pipe(
        finalize(() => {this.loading = false;
        this.cdr.detectChanges();})
      )
      .subscribe({
        next: (data) => {
          console.log('Albums received', data);
          this.albums = data;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Albums load error ', err);
          this.errorMsg = 'Error while loading albums. check console';
          this.cdr.detectChanges();
        }
      });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, ev: MouseEvent): void {
    ev.stopPropagation();
    this.albumService.deleteAlbum(id)
      .subscribe({next: () => {this.albums = this.albums.filter((a) => a.id !== id)}});
  }

}
