import React from 'react';
import styled from 'styled-components';

const ArtTitle = styled.div`
    letter-spacing: 0.4rem;
    color: hsl(0deg 30% 17%);
    text-shadow: 0px 0px 0.1rem var(--theme-hpurple);
    font-size: 0.95rem;
`;

const DownloadButton = styled.a`
    background: none;
    border: none;
    
    letter-spacing: 0.2rem;
    color: #00000060;
    text-shadow: 0px 0px 0.05rem var(--theme-hpurple);
    font-size: 0.7rem;

    transition: all 0.2s;
    
    &:hover {
        color: black;
        text-shadow: 0px 0px 0.05rem black;
    }
`;

const ColorPaletteItem = styled.div`
    background-color: ${props => props.itemPalette};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.1px solid #00000069;
    
    @media (min-width: 992px) {
        width: 1.2rem;
        height: 1.2rem;
    }
`;


export default function CardContentInfos({art}) {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-start justify-content-center'>
        <div className='d-flex justify-content-between align-items-center w-100 my-2'>
            <ArtTitle className='title fw-bold'>
                {art.title}
            </ArtTitle>

            <div className='d-flex'>
                {art.colorPalette.map((color, index) => (
                    <ColorPaletteItem itemPalette={color}  key={index} className={`${index ? 'ms-2' : 0}`}></ColorPaletteItem>
                ))}
            </div>
        </div>

        <DownloadButton
            alt={`Wallpaper ${art.title}`}
            href={art.desktop}
            style={{
                textDecoration: 'none',
            }}
            download={`luraripe_${art.title.split(" ").join('_')}`.toLowerCase()}
        >
            Download
        </DownloadButton>
    </div>
  )
};