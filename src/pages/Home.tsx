import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import { AnimatedPage } from "../components/common/AnimatedPage";
const avatarSrc = "/src/assets/avatar.png";
import { theme } from "../styles/theme/index";
import { SocialLinks } from "../components/common/SocialLinks";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 730px;
  margin: auto;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  box-sizing: border-box;
  transform: translateY(-40px);

  ${theme.media.md} {
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    gap: ${theme.spacing.lg};
    transform: none;
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      background: linear-gradient(
        180deg,
        ${theme.colors.accent.orange}05 0%,
        transparent 20%,
        transparent 80%,
        ${theme.colors.accent.orange}05 100%
      );
      pointer-events: none;
    }
  }
`;

const TopSection = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  width: 100%;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 0;

  ${theme.media.md} {
    flex-direction: column;
    gap: ${theme.spacing.xl};
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 150px;
      height: 150px;
      background: ${theme.colors.accent.orange}08;
      border-radius: 50%;
      filter: blur(40px);
      z-index: -1;
      animation: float 8s ease-in-out infinite;
    }

    @keyframes float {
      0%,
      100% {
        transform: translate(-30px, -20px);
      }
      50% {
        transform: translate(30px, 20px);
      }
    }
  }
`;

const PhotoContainer = styled.div`
  width: 260px;
  height: 260px;
  position: relative;
  overflow: hidden;
  flex: none;

  ${theme.media.md} {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;

    &::before {
      content: "";
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      background: linear-gradient(
        45deg,
        transparent,
        ${theme.colors.accent.orange}40
      );
      animation: spin 4s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;
  gap: ${theme.spacing.md};

  ${theme.media.md} {
    max-width: 100%;
    text-align: center;
    gap: ${theme.spacing.md};
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize.xxl};
  margin: 0;
  text-align: left;
  font-weight: ${theme.typography.fontWeight.medium};
  font-family: ${theme.typography.fontFamily.primary};
  color: ${theme.colors.text.primary};
  letter-spacing: ${theme.typography.letterSpacing.tight};

  ${theme.media.md} {
    font-size: 2.5rem;
    text-align: center;
    background: linear-gradient(
      120deg,
      ${theme.colors.text.primary},
      ${theme.colors.accent.orange},
      ${theme.colors.text.primary}
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 8s linear infinite;
    letter-spacing: -0.03em;

    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  ${theme.media.sm} {
    font-size: ${theme.typography.fontSize.lg};
  }

  &::selection {
    background: #f0f0f0;
    color: #000;
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  text-align: left;
  line-height: ${theme.typography.lineHeight.normal};
  color: ${theme.colors.text.secondary};
  margin: 0;
  font-family: ${theme.typography.fontFamily.primary};
  word-wrap: break-word;
  hyphens: auto;

  ${theme.media.md} {
    font-size: ${theme.typography.fontSize.md};
    text-align: center;
    line-height: 1.4;
    opacity: 0.8;
    font-weight: 300;
  }

  ${theme.media.sm} {
    font-size: ${theme.typography.fontSize.sm};
  }

  &::selection {
    background: #f0f0f0;
    color: #444;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  ${theme.media.md} {
    gap: ${theme.spacing.xs};
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  justify-content: flex-start;

  ${theme.media.md} {
    justify-content: center;
    margin-top: ${theme.spacing.xl};
    gap: ${theme.spacing.xl};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        ${theme.colors.accent.orange}20,
        transparent
      );
      top: -${theme.spacing.md};
    }

    a {
      transform: scale(1.2);
      opacity: 0.7;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        opacity: 1;
        transform: scale(1.3) translateY(-2px);
      }
    }
  }
`;

const NavWrapper = styled.div`
  margin-top: ${theme.spacing.sm};
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;

  ${theme.media.md} {
    margin-top: ${theme.spacing.lg};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};

    nav {
      gap: ${theme.spacing.md};

      a {
        opacity: 0.8;
        transition: all 0.3s ease;
        position: relative;
        font-size: 0.9rem;

        &:hover {
          opacity: 1;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: ${theme.colors.accent.orange};
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        &:hover::after {
          transform: scaleX(1);
        }
      }
    }
  }
`;

export default function Home() {
	const [imageError, setImageError] = useState(false);

	console.log("Avatar import:", avatarSrc);

	return (
		<AnimatedPage>
			<HomeContainer>
				<TopSection>
					<PhotoContainer>
						<Avatar
							src={avatarSrc}
							alt="Profile Photo"
							onError={(e) => {
								console.error("Image failed to load", e);
								setImageError(true);
							}}
						/>
						{imageError && <div>Failed to load image</div>}
					</PhotoContainer>
					<TextContainer>
						<ContentWrapper>
							<Title>Sumit Pokharel</Title>
							<Subtitle>
								Software Engineer and a self-learning Machine Learning
								enthusiast
							</Subtitle>
						</ContentWrapper>
						<SocialContainer>
							<SocialLinks />
						</SocialContainer>
					</TextContainer>
				</TopSection>
				<NavWrapper>
					<Header />
				</NavWrapper>
			</HomeContainer>
		</AnimatedPage>
	);
}
