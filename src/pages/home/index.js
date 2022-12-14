import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContent from '../../common/components/CardContent';
import { setShowBannerValue } from '../../store/banner';
import { getData } from '../../store/scriptsContent';
import { useSearchParams } from "react-router-dom";
import arts from "../../content/arts";

import styled from "styled-components";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import CardContentInfos from './components/CardContentInfos';

const CardBackground = styled.div`
    background: ${props => `url(${props.backgroundContent}), var(--theme-lpink)`};
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1.5/1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &, & > * {
        transition: transform 0.3s;
    } 

    &:hover {
        transform: rotate(-4deg) translateX(0.6rem) translateY(-0.7rem);
    }
`;

const countLabelColors = [
    'hsl(308deg 36% 35%)',
    'hsl(180deg 36% 35%)',
    'hsl(253deg 36% 35%)',
    'hsl(0deg 15% 40%)',
    'hsl(338deg 55% 40%)',
    // 'hsl( 55deg 70% 70%)',
    // 'hsl( 105deg 70% 70%)',
    // 'hsl( 305deg 70% 70%)',
]

const CountLabel = styled.div`
    position: relative;
    left: -12px;
    top: -12px;
    
    font-size: 14px;

    width: 36px;
    height: 36px;

    background-color: ${() => countLabelColors[Math.floor(Math.random() * (countLabelColors.length))]};
    color: white;

    border-radius: 50%;
`;

const WrapperCardContentHover = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    
    @media (min-width: 992px) {
        background: var(--theme-bg-hpurple);
    }
    
    &:hover {
        background: var(--theme-bg-hpurple);
    }
`;

export default function Home () {
    const [searchParams] = useSearchParams();

    return (
        <div className="row mb-5 mt-5 mt-lg-0">
            {arts.map((art, index) => {
                return (
                    <div key={art.id} className='col-lg-4 p-3 mb-5 mb-lg-2 d-flex flex-column align-items-center justify-content-center'>
                        <div className=' w-100 d-flex align-items-center flex-column justify-content-center'>
                            <CardBackground index={index} backgroundContent={art.desktop}>
                                <CountLabel className='d-flex align-items-center justify-content-center'>{index + 1}</CountLabel>
                            </CardBackground>

                            <div className='w-100 mt-4'>
                                <CardContentInfos art={art} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }