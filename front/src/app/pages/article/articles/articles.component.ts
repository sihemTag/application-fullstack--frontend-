import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  showArticleForm = false;
  articles: Article[]= [];

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  openArticleForm() {
   this.showArticleForm = true;
  }

  closeArticleForm() {
    this.showArticleForm = false;
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.all().subscribe(
      (response) => {
        this.articles = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    );
  }

}
