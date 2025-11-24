export type FavoritesApiResponseModel = {
  entries: [
    {
      title: string;
      type: string;
      last_update: string;
      full_url: string;
    }
  ];
};

export type ResumepointApiResponseModel = {
  resumepoint: number;
};

export type Book = {
  title: string;
  type: string;
  last_update: string;
  full_url: string;
  resumepoint?: number;
};
