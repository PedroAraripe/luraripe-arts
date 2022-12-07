import React from 'react';
import styled from 'styled-components';

const ArtTitle = styled.div`
    letter-spacing: 0.3rem;
    color: white;
    
    @media (max-width: 991px) {
        color: var(--theme-bg-hpurple);
        text-shadow: 0px 0px 0.05rem var(--theme-hpurple);
    }
    
`;

const DownloadButton = styled.button`
    background: none;
    border: none;
    letter-spacing: 0.2rem;
    color: white;
    
    @media (max-width: 991px) {
        color: var(--theme-bg-hpurple);
        text-shadow: 0px 0px 0.05rem var(--theme-hpurple);
    }
    
`;


export default function CardContentInfos({art}) {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
      <ArtTitle className='title h4 fw-bold'>
          {art.title}
      </ArtTitle>

      <div className="btn-group dropup">
          <DownloadButton
              type="button"
              className="h6 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
          >
              Download
          </DownloadButton>
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
    </div>
  )
};