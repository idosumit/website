export interface BlogPost {
  id: number
  title: string
  date: string
  slug: string
  content: () => JSX.Element
} 