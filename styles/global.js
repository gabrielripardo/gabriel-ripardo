import styled from 'styled-components'

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 20rem;
  height: 100vh;
  background-color: #000;
  z-index: 2;
  padding: 10px 5px;  
  
  .perfil {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 40px 0 0;

    .perfilImage {
      border-radius: 50px;
    }

    .perfilTitles {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }    
    
    .perfilDescription {      
      text-align: center;
    }    
  }

  .networks {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    padding: 10px;
    list-style: none;
    margin: 30px 0;

    .linkedin {
      width: 40px;
      background-color: #0070f3;
      padding: 4px 7px;
      border-radius: 6px;
    }

    .github {
      width: 40px;
      background-color: brown;
      padding: 6px 7px 3px;
      border-radius: 6px;
    }
  }
  @media (max-width: 1170px) {    
    ${props => props.mobile ? `display: flex; width: 100vw;` : `display: none`};
    
    .perfil {
      .perfilDescription {
        ${props => props.mobile && 'display: none'}         
      }
    }
  }  
`;

