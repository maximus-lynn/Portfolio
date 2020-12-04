import styled from "styled-components";
import breakpoints from "../../../assets/css/breakpoints";
import headerLineLeft from "../../../utils/mixins/headerLineLeft";

interface StyledProps {
  background_colour: string;
}

interface Props extends StyledProps {
  title: string;
  description: string;
  image: string;
}

const SkillImage = styled('div')`
  background-color: var(--card-background);
  padding: 1.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 50%;
  }

  img {
    width: 100%;
  }
`;

const Skill = styled('article')`
  display: flex;
  color: var(--body-font-color-alt);

  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    flex-direction: column;
    margin: 3rem;
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    :nth-child(odd) {
      flex-direction: row-reverse;
    }

    :first-child {
      ${SkillImage} {
        align-self: flex-end;

        img {
          width: auto;
        }
      }
    }

    :last-child ${SkillImage} {
      align-self: flex-start;
    }
  }

  &.alt {
    color: var(--body-font-color);
  }
`;

const Header = styled('header')<StyledProps>`
  text-align: left;
  padding: 2.5rem 1.875rem;
  ${({ background_colour }) => background_colour && `
    background-color: ${background_colour}
  `};

  @media only screen and (min-width: ${breakpoints.medium}) {
    flex: 1 1 50%;
  }
`;

const Title = styled('h4')`
  ${headerLineLeft('var(--body-font-color-alt)')}
  margin: 0;

  &.alt::before {
      border-color: $body-font-color;
  }
`;

const SkillArticle = ({
  title,
  description,
  image,
  background_colour,
}: Props) => (
  <Skill>
    <SkillImage>
      <img src={image} alt={title} />
    </SkillImage>
    <Header background_colour={background_colour}>
      <Title>
        {title}
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </Header>
  </Skill>
);


export default SkillArticle;
