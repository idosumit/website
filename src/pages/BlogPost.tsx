import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  PageContainer,
  ContentSection,
  PageTitle,
  PageContent,
} from "../styles/shared";
import { loadBlogPosts, getPostBySlug } from "../blogs/utils";
import type { BlogPost } from "../blogs/types";
import { AnimatedPage } from "@/components/common/AnimatedPage";
import styled from "styled-components";
import { theme } from "../styles/theme";

const BlogPostContainer = styled.article`
  ${theme.media.md} {
    font-size: 0.85rem;
    line-height: 1.6;
    
    h1 {
      font-size: 1.4rem;
      margin-bottom: ${theme.spacing.lg};
    }
    
    h2 {
      font-size: 1.2rem;
      margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
    }
    
    h3 {
      font-size: 1rem;
      margin: ${theme.spacing.md} 0;
    }
    
    p {
      margin-bottom: ${theme.spacing.md};
    }
    
    pre {
      font-size: 0.8rem;
      padding: ${theme.spacing.md};
      margin: ${theme.spacing.md} 0;
    }
  }
`;

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | undefined>();

  useEffect(() => {
    loadBlogPosts().then(() => {
      setPost(getPostBySlug(slug!));
    });
  }, [slug]);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const Content = post.content;

  return (
    <AnimatedPage>
      <PageContainer>
        <ContentSection>
          <PageTitle>{post.title}</PageTitle>
          <PageContent>
            <BlogPostContainer>
              <Content />
            </BlogPostContainer>
          </PageContent>
        </ContentSection>
      </PageContainer>
    </AnimatedPage>
  );
}
