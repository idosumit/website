import { motion } from "framer-motion";
import styled from "styled-components";

const PageWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const pageVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
};

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
	return (
		<PageWrapper
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
		>
			{children}
		</PageWrapper>
	);
};
