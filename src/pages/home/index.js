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
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    aspect-ratio: ${props => props.index % 2 ? '1.5/1' : '1.3/1'};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &, & > * {
        transition: all 0.3s;

        @media (min-width: 992px) {
            transition: all 0.5s;
        }
    } 

    & > * {
        height: 100%;
        width: 100%;

        @media (min-width: 992px) {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    &:hover {
        & > * {
            transform: translateX(0);
            opacity: 1; 
        }
    }
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
                    <div key={art.id} className='col-lg-4 p-3 mb-3 d-flex flex-column align-items-center justify-content-center'>
                        <div className=' w-100 d-flex align-items-center flex-column justify-content-center'>
                            <CardBackground index={index} className='d-flex align-items-center' backgroundContent={art.desktop}>
                                <WrapperCardContentHover className=' d-none d-lg-flex p-3 p-lg-4'>
                                    <CardContentInfos art={art} />
                                </WrapperCardContentHover>
                            </CardBackground>

                            <div className='d-lg-none w-100 mt-3'>
                                <CardContentInfos art={art} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }