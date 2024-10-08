import React, { useContext, useEffect, useState } from "react";
import {enterpriseList, itHelpDeskList, lineOfBusinessList} from "../dashboard/external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import Grow from "@mui/material/Grow";
import { sliderProps } from "../dashboard/sliderProps";
import { SearchContext } from "../../contexts/SearchContext";
import { LottieNoData } from "../../components/lottie-web-animation/LottieWebAnimation";
import "../../scss/apps-search.scss";

const AppsSearch = () => {
    const {searchText} = useContext(SearchContext);
    const [appList,setAppList] = useState([]);

    useEffect(() => {
        /* SEARCH IS ENABLED GLOBALLY, NEED TO SEARCH APPS FROM ALL THE TABS AND SHOW TO THE USER*/
        let tempList = enterpriseList.concat(lineOfBusinessList).concat(itHelpDeskList).filter((app) => app.appName.toLowerCase().includes(searchText.toLowerCase()));
        setAppList(tempList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchText]);

    return(
        <div className="apps-search-root-element">
            <h5 className="apps-search-header-name">search results</h5>
            <div className="apps-search-carousel">
                <Slider {...sliderProps(enterpriseList.length)}>
                    {(appList instanceof Array && appList.length > 0) ?
                        appList.map((app,index) => {
                            return(
                                <Grow key={app.id} in={true} style={{transformOrigin: "0 0 0"}} timeout={index * 1000}>
                                    <div className="apps-search-item">
                                        <a href={app.appLink} target="_blank" rel="noreferrer">
                                            <CardMedia component="img" className="apps-search-item-image" src={app.appImage} />
                                        </a>
                                        {
                                        app.noSeatriumLink ?
                                        (<a className="apps-search-item-dont-have-seatrium-email-link" href={app.noSeatriumLink} target="_blank" rel="noreferrer">
                                            Don't Have Seatrium Email
                                        </a>) : <div className="apps-search-item-app-name">{app.appName}</div>
                                        }
                                    </div>
                                </Grow>
                            )
                        }) : <LottieNoData style={{width: "100%"}} />
                    }
                </Slider>
            </div>
        </div>
    )
}

export default AppsSearch;