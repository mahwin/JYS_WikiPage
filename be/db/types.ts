export interface PostType {
  id: string;
  title: string;
  content: string;
}

interface MetaInfo {
  nextId: number;
}

export interface DB {
  posts: PostType[];
  metaInfo: MetaInfo;
}
