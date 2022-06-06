import { TitleStyled, Subtitle } from "./Title.style";

interface TitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
}
