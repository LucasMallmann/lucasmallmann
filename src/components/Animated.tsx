import styled from '@emotion/styled';

export const AnimatedLink = styled.div`
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: all 0.3s ease-in-out;
  }
  color: inherit;
  padding: 16px;
  border: 1px solid #7159c1;
  border-radius: 4px;
  margin: 12px auto;
  background-color: #fff;
  display: flex;
  &:hover {
    border-color: transparent;
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }
  &:before,
  &:after {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 4px;
    border-color: #f90;
  }
  &:before {
    border-width: 1px 0 1px 0;
    transform: scaleX(0);
  }
  &:after {
    border-width: 0 1px 0 1px;
    transform: scaleY(0);
  }
  &:hover:before,
  &:hover:after {
    transform: scale(1, 1);
  }
`;
