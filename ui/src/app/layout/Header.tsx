import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
interface props{
    darkMode:boolean;
    addDarkMode:()=>void;
}
export default function Header({darkMode,addDarkMode}:props) {

    return(
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h6">Store</Typography>
                <Switch onChange={addDarkMode} checked={darkMode}></Switch>
            </Toolbar>
        </AppBar>
    )
}