export type FavoritesApiResponseModel = {
  entries: [Book];
};

export type Book = {
  title: string;
  type: string;
  last_update: string;
  full_url: string;
};
