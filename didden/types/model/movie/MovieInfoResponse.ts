export interface MovieInfoResponse {
  results: MovieInfo[];
}

export interface MovieInfo {
  id: number;
  title: string;
  poster_path: string;
}
