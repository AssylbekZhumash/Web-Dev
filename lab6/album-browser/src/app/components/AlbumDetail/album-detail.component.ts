import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-album-detail",
  standalone: true,
  templateUrl: "./album-detail.component.html",
  styleUrls: ["./album-detail.component.css"],
  imports: [CommonModule, FormsModule]
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  loading = false;
  titleDraft = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;

    this.albumService.getAlbum(id)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (a) => {
          this.album = a;
          this.titleDraft = a.title;
          this.loading = false;
          this.cdr.detectChanges();
        },
      error: (err) => {
          console.log('Album load error', err);
          this.cdr.detectChanges();
      },
      });
  }

  save(): void {
    if (!this.album) return;
    const updated: Album = {...this.album, title: this.titleDraft };

    this.albumService.updateAlbum(updated).subscribe({
      next: (a) => {this.album = a}
    })
  }

  backToAlbums(): void {
    this.router.navigate(["/albums"]);
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(["/albums", this.album.id, 'photos']);
  }

}
