import styled from 'styled-components';

const LoadingOverlay = styled('div')`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <LoadingOverlay>
    Loading...
  </LoadingOverlay>
);

export default Loading;