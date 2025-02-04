import { BlogPost } from './types'

// This will store all our blog posts
const blogPosts: BlogPost[] = []

// Load all blog posts
export async function loadBlogPosts() {
  try {
    // Clear existing posts
    blogPosts.length = 0
    
    // Import posts directly (we'll add more posts by adding to this list)
    const modules = [
      await import('./posts/001-first-post' ),
      await import('./posts/002-second-post'),
    ]
    
    for (const module of modules) {
      if (module.post) {
        blogPosts.push(module.post)
        console.log('Loaded post:', module.post.title) // Debug log
      }
    }
    
    // Sort posts by date
    blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    console.log('Total posts loaded:', blogPosts.length) // Debug log
    return blogPosts
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

// Get all blog posts
export function getAllPosts(): BlogPost[] {
  return blogPosts
}

// Add a new function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
} 