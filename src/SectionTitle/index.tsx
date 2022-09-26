/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  description?: string | ReactNode;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
