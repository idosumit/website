import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../Header";
import { theme } from "../../styles/theme";
import { SocialLinks, SocialContainer } from "./SocialLinks";
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
    display: none;
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

const MobileNav = styled.div`
  display: none;
  
  ${theme.media.md} {
    display: block;
    position: fixed;
    bottom: ${theme.spacing.lg};
    right: ${theme.spacing.lg};
    z-index: 1000;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  ${theme.media.md} {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: calc(${theme.spacing.xl} + 50px); // Space for the button
    left: ${theme.spacing.lg};
    right: ${theme.spacing.lg};
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    border-radius: ${theme.spacing.sm};
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(100%)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
    transition: all 0.3s ease;
    max-height: 80vh;
    overflow-y: auto;
    
    nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      
      a {
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        font-size: 0.9rem;
        text-align: left;
        border-bottom: 1px solid ${theme.colors.accent.orange}15;
        
        &:last-child {
          border-bottom: none;
        }
      }
    }

    ${SocialContainer} {
      margin-top: ${theme.spacing.lg};
      padding: 0 ${theme.spacing.md};
      justify-content: flex-start;
      
      a {
        opacity: 0.7;
        
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const FloatingButton = styled.button<{ isOpen: boolean }>`
  display: none;
  
  ${theme.media.md} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${theme.colors.accent.orange};
    border: none;
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    position: fixed;
    bottom: ${theme.spacing.lg};
    right: ${theme.spacing.lg};
    z-index: 1001; // Above the menu
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const currentYear = new Date().getFullYear();
	const menuRef = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<>
			<TopBarContainer isHome={isHome} visible={visible}>
				<TopBarContent>
					<Header />
					<SocialLinks />
				</TopBarContent>
			</TopBarContainer>
			
			{!isHome && (
				<MobileNav>
					<FloatingButton 
						isOpen={isMenuOpen}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle navigation"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M6 9l6 6 6-6"/>
						</svg>
					</FloatingButton>
					
					<MobileMenu ref={menuRef} isOpen={isMenuOpen}>
						<Header />
						<SocialLinks />
					</MobileMenu>
				</MobileNav>
			)}
			
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
