export default `
  cursor: pointer;
  position: relative;
  padding: 2rem 3.125rem;
  text-decoration: none;
  color: var(--button-color);

  font-family: var(--button-font-family);
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: bold;
  font-size: var(--h1);

  .icon {
    position: absolute;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-top: 0px;

    transition: all .25s;
    width: 35px;
    height: 35px;
  }

  .icon-arrow-top-left {
    top: 0;
    left: 0;
    border-top: solid 5px;
    border-left: solid 5px;
  }

  .icon-arrow-top-right {
    top: 0;
    right: 0;
    border-top: solid 5px;
    border-right: solid 5px;
  }

  .icon-arrow-bottom-left {
    bottom: 0;
    left: 0;
    border-bottom: solid 5px;
    border-left: solid 5px;
  }

  .icon-arrow-bottom-right {
    bottom: 0;
    right: 0;
    border-bottom: solid 5px;
    border-right: solid 5px;
  }

  &:hover {
    .icon-arrow-top-left {
        margin-top: -3px;
        margin-left: -3px;
    }

    .icon-arrow-top-right {
        margin-top: -3px;
        margin-right: -3px;
    }

    .icon-arrow-bottom-left {
        margin-bottom: -3px;
        margin-left: -3px;
    }

    .icon-arrow-bottom-right {
        margin-bottom: -3px;
        margin-right: -3px;
    }
  }
`;