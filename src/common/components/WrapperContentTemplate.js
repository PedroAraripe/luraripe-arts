import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import { setShowBannerValue } from "../../store/banner";
import scriptsList from "../constants/scriptsList";
import { HighlightedItem } from "./Contents";

const ArticleBanner = styled.div`
  max-height: 250px;
  aspect-ratio: 3;
  background: linear-gradient(to bottom, #26030366, #00000000), url("${props => props.backgroundUrl}");
  background-repeat: no-repeat;
  width: 100%;
  background-color: gray;
  border-radius: 10px;
  filter: brightness(90%);
  background-size: cover;
  position: relative;
  background-position: center center;
`
export default function WrapperContent({children})  {

    return (
      <div className="container py-5 mt-lg-5">
        {children}
      </div>
    );
};
