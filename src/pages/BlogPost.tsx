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
            <Content />
          </PageContent>
        </ContentSection>
      </PageContainer>
    </AnimatedPage>
  );
}
