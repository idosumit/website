import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import { theme } from "../../styles/theme";
import { SocialLinks } from "./SocialLinks";
import { AnimatePresence } from "framer-motion";

const Main = styled.main<{ isHome: boolean }>`
  padding: ${theme.spacing.lg};
  width: 100%;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isHome ? "center" : "flex-start")};
  justify-content: ${(props) => (props.isHome ? "center" : "flex-start")};
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  ${theme.media.md} {
    padding: ${theme.spacing.md};
  }
`;

const TopBarContainer = styled.div<{ isHome: boolean; visible: boolean }>`
  display: ${(props) => (props.isHome ? "none" : "flex")};
  justify-content: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  transition: ${theme.transitions.normal};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(${(props) => (props.visible ? "0" : "-100%")});
  padding: ${theme.spacing.sm} 0;

  ${theme.media.md} {
    padding: ${theme.spacing.xs} 0;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Content = styled.div<{ isHome: boolean }>`
  flex: 1;
  margin-bottom: 0;
  ${(props) => !props.isHome && `margin-top: ${theme.spacing.xl};`}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isHome ? "center" : "flex-start")};
  justify-content: ${(props) => (props.isHome ? "center" : "flex-start")};
  box-sizing: border-box;
  position: relative;
`;

const FooterWrapper = styled.div<{ isHome: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.isHome ? 0 : theme.spacing.xl)};
  padding: ${theme.spacing.sm} 0;

  ${theme.media.md} {
    margin-top: 0;
    padding: ${theme.spacing.xs} 0;
  }
`;

const Footer = styled.footer`
  color: ${theme.colors.text.secondary};
  font-size: 0.8rem;
  opacity: 0.5;
  font-weight: 300;
  letter-spacing: 0.02em;

  ${theme.media.md} {
    font-size: 0.7rem;
  }
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const currentYear = new Date().getFullYear();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(
				prevScrollPos > currentScrollPos ||
				currentScrollPos < 10 ||
				currentScrollPos + window.innerHeight >=
				document.documentElement.scrollHeight,
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<>
			<TopBarContainer isHome={isHome} visible={visible}>
				<TopBarContent>
					<Header />
					<SocialLinks />
				</TopBarContent>
			</TopBarContainer>
			<Main isHome={isHome}>
				<Content isHome={isHome}>
					<AnimatePresence mode="wait">{children}</AnimatePresence>
				</Content>
				<FooterWrapper isHome={isHome}>
					<Footer>© {currentYear} Your Name. All rights reserved.</Footer>
				</FooterWrapper>
			</Main>
		</>
	);
};
