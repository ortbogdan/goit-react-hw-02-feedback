import styled from 'styled-components';

export const StatisticsBox = styled.div`
  width: 200px;
  border-radius: 6px;
  padding: 15px 0;
  background-color: #a1dae4;
  > p:not(:last-child) {
    margin-bottom: 5px;
  }
  p > span {
    font-weight: 700;
    margin-left: 5px;
  }
`;
