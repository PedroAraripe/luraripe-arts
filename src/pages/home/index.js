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

const CardBackground = styled.div`
    background: ${props => props.backgroundContent ? `url(${props.backgroundContent})` : 'var(--theme-hpink)'};
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    aspect-ratio: ${props => props.index % 2 ? '1.5/1' : '1.3/1'};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &, & > * {
        transition: all 0.3s;

        @media (min-width: 1280px) {
            transition: all 0.5s;
        }
    } 

    & > * {
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
        opacity: 0;
    }

    &:hover {
        & > * {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const WrapperCardContentHover = styled.div`
    background-color: var(--theme-bg-hpurple);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;

    & > .title {
        font-size: 1.5rem;
    }
`;

export default function Home () {
    const [searchParams] = useSearchParams();

    return (
        <div className="row mb-5">
            {arts.map((art, index) => {
                return (
                    <div key={art.id} className='col-lg-4 p-3 mb-3 d-flex flex-column align-items-center justify-content-center'>
                        <div className=' w-100 d-flex align-items-center justify-content-center'>
                            <CardBackground index={index} className='d-flex align-items-center' backgroundContent={art.desktop}>
                                <WrapperCardContentHover className='p-3 p-lg-4'>
                                    <div className='title'>
                                        {art.title}
                                    </div>

                                    <div className="btn-group dropup">
                                        <button
                                            type="button"
                                            className="dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{
                                                background: 'none',
                                                color: 'white',
                                                border: 'none',
                                            }}
                                        >
                                            Download
                                        </button>
                                        <ul className="dropdown-menu dropdown-up-download" >
                                            {[
                                                {
                                                    title: 'mobile',
                                                    size:'1687px x 3000px' 
                                                },
                                                {
                                                    title: 'desktop',
                                                    size:'3000px x 2000px' 
                                                },

                                            ]
                                                .map((type, index) => (
                                                    <li
                                                        className='dropdown-item text-center'
                                                        key={index}
                                                    >
                                                        <a
                                                            alt={`download ${type.title}`}
                                                            href={art[type.title]}
                                                            className="fw-bold"
                                                            style={{
                                                                textDecoration: 'none',
                                                                color: 'var(--theme-hpurple)'
                                                            }}
                                                            download
                                                        >
                                                            {type.title}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>
                                        </div>
                                </WrapperCardContentHover>
                            </CardBackground>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }