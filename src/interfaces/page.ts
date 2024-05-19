export type Page = "api" | "home" | "basic" | "detailed" | "results";
export type QuizType = "basic" | "detailed";

export interface PageProps {
  page: Page;
  updatePage: (newPage: Page) => void;
}

export interface PageKeyProps {
  page: Page;
  updatePage: (newPage: Page) => void;
  key: string;
  setKey: (newKey: string) => void;
  handleSubmit: () => void;
}

export interface test {
  apikey: string | null;
}
