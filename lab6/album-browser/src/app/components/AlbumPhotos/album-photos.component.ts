import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/photo.model'
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: "app-album-photos",
  standalone: true,
  templateUrl: "./album-photos.component.html",
  styleUrls: ["./album-photos.component.css"],
  imports: [CommonModule],
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get("id"));
    this.loading = true;

    this.albumService.getAlbumPhotos(this.albumId)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (p) => {
          this.photos = p;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log(err);
          this.cdr.detectChanges();
          },
      });
  }

  back(): void {
    this.router.navigate(["/albums", this.albumId]);
  }

}
