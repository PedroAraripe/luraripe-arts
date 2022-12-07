import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContent from '../../common/components/CardContent';
import { setShowBannerValue } from '../../store/banner';
import { getData } from '../../store/scriptsContent';
import { useSearchParams } from "react-router-dom";
import arts from "../../content/arts";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home () {
    const [searchParams] = useSearchParams();


    return (
        <div className="row mb-5">
            {arts.map((art, index) => {
                const showMobile = index % 2;

                return (

                    <div key={art.id} className='col-lg-4 mb-5 d-flex flex-column align-items-center justify-content-center'>
                        <div className='p-lg-4 w-100 d-flex align-items-center justify-content-center'>
                            <div
                                className='d-flex align-items-center justify-content-center'
                                style={{
                                    background: 'var(--theme-lpink)',
                                    overflow: 'hidden',
                                    maxHeight: '400px',
                                    borderRadius: '10px',
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: `${showMobile ? 225 / 337 : 359 / 202}`,
                                }}
                            >
                                <img
                                    width="300px"
                                    height="200px"
                                    className='w-100 img-fluid'
                                    src={showMobile ? art.mobile : art.desktop}
                                    alt={`${art.title}`}
                                    style={{background: 'var(--theme-lpink)'}}
                                />
                            </div>
                        </div>

                        <div
                            className='mt-3 mt-lg-4'
                            style={{
                                letterSpacing: '0.1rem',
                                color: 'var(--theme-hpurple)',
                                fontWeight: 'bold'
                            }}
                        >
                            {art.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }