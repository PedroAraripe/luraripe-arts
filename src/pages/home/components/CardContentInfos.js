import React from 'react';
import styled from 'styled-components';

const ArtTitle = styled.div`
    letter-spacing: 0.2rem;
    color: white;
    color: var(--theme-bg-hpurple);
    text-shadow: 0px 0px 0.05rem var(--theme-hpurple);
`;

const DownloadButton = styled.a`
    background: none;
    border: none;
    letter-spacing: 0.2rem;
    color: var(--theme-bg-hpurple);
    text-shadow: 0px 0px 0.05rem var(--theme-hpurple);
    
    transition: all 0.2s;
    
    &:hover {
        color: var(--theme-bg-hpurple);
        font-weight: bold !important;
    }
`;


export default function CardContentInfos({art}) {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center align-items-lg-start justify-content-center'>
      <ArtTitle className='title h5 fw-bold'>
          {art.title}
      </ArtTitle>

        <DownloadButton
            alt={`download desktop`}
            href={art.desktop}
            style={{
                textDecoration: 'none',
            }}
            download
            className="h6 fw-normal"
        >
            Download
        </DownloadButton>
    </div>
  )
};