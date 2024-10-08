import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import Divider from "@mui/material/Divider";
import "../../scss/header.scss";
import { SearchContext } from "../../contexts/SearchContext";

const AppHeaderTwo = () => {
    const {setSearchText} = useContext(SearchContext);

    const onInputChange = (e) => {
        setSearchText(e.target.value.trim());
    }

    return(
        <div className="app-header-two-root-element">
            <div className="app-header-two-overlay-content">
                <div className="app-header-two-overlay-content-row-1">
                    <label style={{color: "#FFF",fontSize: "2rem",textTransform: "capitalize"}}>How can i help you?</label>
                    <Paper sx={{width: "50%",display: "flex",flexDirection: "row",padding: "10px",columnGap: "10px"}}>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider orientation="vertical" />
                        <InputBase placeholder="Search Apps..." sx={{width: "100%"}} inputProps={{"aria-label": "search"}} onChange={onInputChange} />
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default AppHeaderTwo;