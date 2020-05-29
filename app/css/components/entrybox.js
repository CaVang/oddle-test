import styled from '@emotion/styled';
import { heading } from '../common/typography';
import TopicTextForm from '../../components/TopicTextForm';
import { input } from '../common/input';

export const EntryBoxWrapper = styled.div`
  width: 50%;
  display: inline-block;
  top: -5px;
  position: relative;
`;

export const Header = styled.h1`
  ${heading};
  text-align: center;
`;

export const Input = styled(TopicTextForm)`
  ${heading};
  ${input};
  text-align: center;
  outline: none;
`;
