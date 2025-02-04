import styled from "styled-components";
import {
  PageContainer,
  ContentSection,
  PageTitle,
  PageContent,
} from "../styles/shared";
import { Text } from "../components/Text";
import { AnimatedPage } from "@/components/common/AnimatedPage";

export default function About() {
  return (
    <AnimatedPage>
      <PageContainer>
        <ContentSection>
          <PageTitle>
            <Text type="gradient" variant="blue">
              About Me
            </Text>
          </PageTitle>
          <PageContent>
            <p>
              Hello! I'm a software engineer passionate about{" "}
              <Text type="highlight" variant="green">
                building great web applications
              </Text>
              . I love working with{" "}
              <Text type="subtle" variant="purple">
                modern technologies
              </Text>{" "}
              and solving complex problems.
            </p>
            <Text as="p">
              When I'm not coding, you can find me{" "}
              <Text type="link" variant="orange">
                reading about new technologies
              </Text>
              , or exploring the outdoors.
            </Text>
          </PageContent>
        </ContentSection>
      </PageContainer>
    </AnimatedPage>
  );
}
