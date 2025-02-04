import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PageContainer,
  ContentSection,
  PageTitle,
  PageFooter,
} from "../styles/shared";
import { ColoredLink, SecondaryText } from "../styles/typography";
import { loadBlogPosts, getAllPosts } from "../blogs/utils";
import type { BlogPost } from "../blogs/types";
import { theme } from "../styles/theme";
import { AnimatedPage } from "@/components/common/AnimatedPage";

const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0;
`;

const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0;
`;

const BlogItem = styled.li`
  margin-bottom: ${theme.spacing.lg};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlogTitle = styled.h1`
  ${theme.media.md} {
    font-size: 1.8rem;
    margin-bottom: ${theme.spacing.md};
    text-align: center;
  }
`;

const BlogPostTitle = styled.h2`
  ${theme.media.md} {
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.xs};
  }
`;

const BlogDate = styled.span`
  ${theme.media.md} {
    font-size: 0.8rem;
    opacity: 0.7;
  }
`;

const VARIANTS = ["purple", "green", "orange", "blue"] as const;
type ColorVariant = (typeof VARIANTS)[number];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        await loadBlogPosts();
        const allPosts = getAllPosts();
        const uniquePosts = Array.from(
          new Map(allPosts.map((post) => [post.id, post])).values(),
        );
        setPosts(uniquePosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <AnimatedPage>
        <PageContainer>
          <ContentSection>
            <PageTitle>Blog</PageTitle>
            <div>Loading posts...</div>
          </ContentSection>
        </PageContainer>
      </AnimatedPage>
    );
  }

  if (posts.length === 0) {
    return (
      <AnimatedPage>
        <PageContainer>
          <ContentSection>
            <PageTitle>Blog</PageTitle>
            <div>No posts found.</div>
          </ContentSection>
        </PageContainer>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <PageContainer>
        <ContentSection>
          <PageTitle>Blog</PageTitle>
          <BlogContainer>
            <BlogList>
              {posts.map((post, index) => {
                const variant = VARIANTS[
                  index % VARIANTS.length
                ] as ColorVariant;
                return (
                  <BlogItem key={post.id}>
                    <ColoredLink to={`/blog/${post.slug}`} variant={variant}>
                      {post.title}
                    </ColoredLink>
                    <SecondaryText variant={variant}>{post.date}</SecondaryText>
                  </BlogItem>
                );
              })}
            </BlogList>
          </BlogContainer>
          <PageFooter>Subscribe via RSS</PageFooter>
        </ContentSection>
      </PageContainer>
    </AnimatedPage>
  );
}
