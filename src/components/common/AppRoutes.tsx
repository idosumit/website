import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import BlogPost from "../../pages/BlogPost";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<BlogPost />} />
		</Routes>
	);
};
