import { TestBed, getTestBed  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let injector: TestBed;
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    injector = getTestBed();
    service = injector.get(PostsService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service.getPosts).toBeTruthy();
   });
   describe('#getPosts', () => {
    it('should return an Observable<Posts[]>', () => {
      const dummyData = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
      ];

      service.getPosts().subscribe(posts => {
        expect(posts.length).toBe(3);
        expect(posts).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`${service.apiUrl}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyData);
    });
  });
  describe('#deletePost', () => {
    it('should return an Observable<Posts[]>', () => {
      const dummyData = {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

      service.deletePost(dummyData).subscribe(posts => {
        expect(posts).toBeTruthy();
        expect(posts).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`${service.apiUrl}/${dummyData.id}`);
      expect(req.request.method).toBe("DELETE");
      req.flush(dummyData);
    });
  });
});
