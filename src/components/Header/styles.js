import styled from 'styled-components'

export const AreaHeader = styled.div`
  height: 60px;
  background-color: #791e94;
  color: #fff;

  .container {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    flex: 1;
    background-image: url('Logo.png');
    background-repeat: no-repeat;
    background-size: 50px 50px;
    width: 50px;
    height: 50px;
  }

  .logout {
    width: 100%;
    flex: 1;
    text-align: end;
    padding-right: 20px;
  }
`
