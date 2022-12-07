import React from 'react';

import styled from 'styled-components'

const WrapperFooter = styled.footer`
    font-size: .7rem;
    color: #b7b2b2;
`

function FooterSection() {
    return (
        <WrapperFooter className='text-white p-5 d-flex align-items-center justify-content-center text-center text-capitalize'>
            <span>
                Designed & Built by <a href="https://github.com/PedroAraripe" style={{textDecoration: 'none', color: "white", fontWeight: "bold"}}>Lucas Araripe</a>
            </span>
        </WrapperFooter>
    );
  }
  
  export default FooterSection;
  
