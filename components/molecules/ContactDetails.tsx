import styled from "styled-components";
import Container from "../atoms/Container";
import ArrowButton from "../atoms/buttons/ArrowButton";
import breakpoints from "../../assets/css/breakpoints";

const ContactDetailsWrapper = styled('section')`
  background-image: url('/images/grid.png');
  background-color: var(--grid-bg);
`;

const ContactDetailsContainer = styled(Container)`
  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const ContainerDetailsButton = styled(ArrowButton)`
  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    margin-top: .5rem;
    display: inline-block;
  }
`;

const ContactHeading = styled('h4')`
  font-size: 2.375rem;
`;

const ContactDetails = ({ text, buttonText, buttonUrl }) => (
  <ContactDetailsWrapper>
    <ContactDetailsContainer center>
      <ContactHeading
        dangerouslySetInnerHTML={{
          __html: text
        }}
      />
      <ContainerDetailsButton
        href={`mailto:${buttonUrl}`}
      >
        {buttonText}
      </ContainerDetailsButton>
    </ContactDetailsContainer>
  </ContactDetailsWrapper>
);

export default ContactDetails;


// <div className="footer__container">
  // <h4 className="footer__heading">
  //     NEED A HAND? <br/>
  //     WELL I HAVE TWO.
  // </h4>
  // <a href="mailto:max.r.k.lynn@gmail.com"
  //    className="footer__button">
  //    MAIL ME

  //    <i className="icon icon-arrow-top-left"></i>
  //    <i className="icon icon-arrow-top-right"></i>
  //    <i className="icon icon-arrow-bottom-left"></i>
  //    <i className="icon icon-arrow-bottom-right"></i>
  // </a>
// </div>


// .footer {
//   margin: 0;
//   background-image: url('~assets/imgs/grid.png');
//   background-color: $grid-bg;

//   &__container {
//       @extend %containerRow;
//       text-align: center;

//       @include breakpoint(medium) {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           text-align: left;
//       }
//   }

//   &__heading {
//       font-size: $h1;
//   }

//   &__button {
//       @extend %button;

//       @include breakpoint(smallOnly) {
//           margin-top: .5rem;
//           display: inline-block;
//       }
//   }

//   &__up {
//       cursor: pointer;
//       padding: 2rem 0;
//       font-size: 2rem;
//       text-align: center;
//       background-color: $card-background;
//       color: $button-icon;
//   }
// }