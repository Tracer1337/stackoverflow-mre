import React from "react"
import ReactDOM from "react-dom"
import { CssBaseline, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Typography variant="h1">Hello World!</Typography>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
