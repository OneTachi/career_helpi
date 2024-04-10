export type Page = 
    | "api"
    | "home"
    | "basic"
    | "detailed"
    | "results"; 

export interface PageProps {
    page: Page
    setPage: (newPage: Page) => void
}