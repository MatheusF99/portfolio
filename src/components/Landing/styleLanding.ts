import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  /* position: relative; */

  svg{
    height: 90vh;
    width: 100vw;
  }

  .landing{

    position: absolute;

    width: 90%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    max-width: 1440px;

    header{

      /* background: ${props => props.theme.colors.blueDark}; */

      width: 100%;
      height: 80px;

      display: flex;
      justify-content: space-between;

      flex-direction: row;

      padding: 0 5rem;

      svg{
        margin: auto 0;

        width: 5rem;
        height: 5rem;
      }

      .toggle-Button{
        width: 4rem;
        height: 4rem;

        background: none;

        margin: auto 0;

        border: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .one, .three{
          background: #000;
          height: 4px;
          width: 60%;
          margin: .1rem 0;
        }

        .two{
          background: #000;
          height: 4px;
          width: 50%;
          margin: .1rem 0 .05rem 0.4rem;

        }
      }
    }

      .menu{
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};

        width: 50%;
        height: 100%;

        position: fixed;
        right: -100%;

        transition: .3s;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        flex-direction: row;



        button {

          width: 4rem;
          height: 4rem;

          background: none;
          border: 0;

          color: #fff;

          position: absolute;
          top: 6.5rem;
          right: 12rem;
        }

        ul li{
          list-style: none;
        }

        .social-list{

          height: 40%;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          flex-direction: column;

          font-size: 2.5rem;

          ul li{
            margin: 2rem 0;
          }
        }
        .menu-list{
          height: 40%;

          display: flex;
          align-items: flex-start;
          justify-content: flex-start;

          flex-direction: column;

          font-size: 4.5rem;
          font-weight: 400;

          span{
            font-size: 2.5rem;
            margin-bottom: 5rem;
          }

          ul li{
            margin: 0.8rem 0;
          }
        }

        .email-div{
          display: flex;
          flex-direction: column;

          position: absolute;

          left: 5rem;
          bottom: 2rem;

          font-size: 2rem;
        }

      }
      .menu.active{
        right: 0;
        transition: .3s;
      }

    section{

      width: 100%;
      height: 80%;

      display: grid;
      grid-template-columns: repeat(2, 1fr);


      .div-1{
        height: 90%;
        display: flex;

        flex-direction: column;

        padding: 0 5rem;

        /* background: ${props => props.theme.colors.red}; */

        .apresentation-div{

          flex: 1;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          font-family: 'Quicksand', sans-serif;

          color: #000;

          .hello{
            font-size: 4rem;
          }

          strong{
            font-size: 8rem;
            font-weight: 600;
          }
          .profile{
            font-size: 5rem;
          }

        }
        button{

          width: 245px;
          height: 80px;

          border: 0;

          background: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.white};

          border-radius: 25px;

          font-size: 2rem;
          font-weight: 600;

          display: flex;
          justify-content: center;
          align-items: center;

        }
      }
      .div-2{
        /* background: ${props => props.theme.colors.grayLine}; */

        display: flex;
        justify-content: center;
        align-items: center;

        svg{
          width: 80%;
          height: 80%;
        }
      }
    }
  }

`
