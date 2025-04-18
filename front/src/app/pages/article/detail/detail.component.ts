import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  comment: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public article: Article) {}

  ngOnInit(): void {
  }

  sendComment(comment: string) {
    console.log('Commentaire envoyé:', comment);
  }

}
