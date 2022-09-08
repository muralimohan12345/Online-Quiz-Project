import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          "This is java script quiz and important questions.Here is the 10 questions will be there and time limit is 5minutes",
        imageUrl: 'assets/images/A1.png',
      },
      {
        id: 'data/aspnet.json',
        name: 'ASP.NET',
        description:
          "This is ASP.NET quiz and important questions.Here is the 10 questions will be there and time limit is 5minutes",
        imageUrl: 'assets/images/net.png',
      },
      {
        id: 'data/csharp.json',
        name: 'C# and .NET',
        description:
          "This is C# and .net quiz and important questions.Here is the 10 questions will be there and time limit is 5minutes",
        imageUrl: 'assets/images/CSHARP.png',
      },
    ];
  }
}
