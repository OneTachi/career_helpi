export type Page = "api" | "home" | "basic" | "detailed" | "results";

export interface PageProps {
  page: Page;
  setPage: (newPage: Page) => void;
}

export interface PageKeyProps {
  page: Page;
  setPage: (newPage: Page) => void;
  key: string;
  setKey: (newKey: string) => void;
  saveKeyData: string;
}
