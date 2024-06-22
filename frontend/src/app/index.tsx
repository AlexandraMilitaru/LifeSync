import { Provider } from "react-redux";
import { APIProvider } from "@vis.gl/react-google-maps";
import { ThemeProvider } from "@mui/material";
import store from "../store";
import theme from "../theme";
import Router from "../router";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
                    <Router />
                </APIProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App;