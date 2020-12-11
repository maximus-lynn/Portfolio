import styled from 'styled-components';
import Image from 'next/image';
import Container from '../atoms/Container';
import breakpoints from '../../assets/css/breakpoints';
import headerLeftLine from '../../utils/mixins/headerLineLeft';

interface Props {
  title: string;
  description: string;
  images: [{
    hobbie: string;
  }]
}

const Content = styled('div')``;

const List = styled('ul')`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    margin-top: 2rem;
  }
`;

const Item = styled('li')`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 1 calc(50% - 1rem);
  background-color: var(--orange);

  margin: .5rem;

  @media only screen and (max-width: ${breakpoints.smallOnly}) {
    padding: 2rem 0;
  }

  &:nth-child(even) {
      padding-right: 0;
  }

  &:nth-child(odd) {
      padding-left: 0;
  }
`;

const HobbiesWrapper = styled(Container)`
  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: space-between;

    ${Content},
    ${List} {
      flex: 0 0 48%;
    }
  }
`;

const Title = styled('h2')`
  ${headerLeftLine('var(--border-line)')}
  margin: 0;
`;

const Hobbies = ({
  title,
  description,
  images,
}: Props) => (
  <HobbiesWrapper>
    <Content>
      <Title>
        {title}
      </Title>
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </Content>
    <List>
      {images.map((item) => (
        <Item>
          <div>
            <Image
              src={item.hobbie}
              alt=""
              width={70}
              height={70}
            />
          </div>
        </Item>
      ))}
    </List>
  </HobbiesWrapper>
);

export default Hobbies;
