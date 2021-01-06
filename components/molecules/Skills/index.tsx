import styled from "styled-components";
import Container from "../../atoms/Container";
import breakpoints from "../../../assets/css/breakpoints";
import Heading from "../../atoms/typography/Heading";
import SkillArticle from "./SkillArticle";

interface Props {
  skills: Array<{
    title: string,
    description: string;
    image: string;
    background_colour: string;
  }>;
}

const SkillWrapper = styled('div')`
  background-image: url('/images/grid.png');
  background-color: var(--grid-bg);

  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 3.75rem 1rem;
  }
`;

const SkillsContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;

  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: -13rem;
  }
`;

const ContentSection = styled('section')`
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: -8rem;
  }
`;

const SkillsTitle = styled('div')`
  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const SkillHeading = styled(Heading)`
  margin: 2.5rem 0;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 50%;
  }
`;

const Skills = ({ skills }: Props) => (
  <SkillWrapper>
    <SkillsContainer center>
      <SkillsTitle>
        <SkillHeading
          width="120px"
          size="var(--h1)"
          type="h1"
        >
          MY SKILLS
        </SkillHeading>
      </SkillsTitle>
      <ContentSection>
        {skills.map((skill) => (
          <SkillArticle
            title={skill.title}
            description={skill.description}
            image={skill.image}
            background_colour={skill.background_colour}
          />
        ))}
      </ContentSection>
    </SkillsContainer>
  </SkillWrapper>
);

export default Skills;