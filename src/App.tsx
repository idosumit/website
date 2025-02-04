import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { AppRoutes } from "./components/common/AppRoutes";
import { Layout } from "./components/common/Layout";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalStyle />
				<Layout>
					<AppRoutes />
				</Layout>
			</Router>
		</ThemeProvider>
	);
}
