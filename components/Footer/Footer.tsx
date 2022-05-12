import React from 'react';
import {
  FooterSpan,
  FooterWrapper,
  Link,
  GitHubsList,
  GitHubsItem,
  LogoSchool,
  Wrap,
} from './footer.styled';

export const Footer: React.FC = () => {
  return (
    <FooterSpan>
      <FooterWrapper>
        <Link href="https://rs.school/">
          <LogoSchool src="/rs_school_js.svg" alt="rsschool" />
        </Link>
        <GitHubsList>
          <GitHubsItem>
            <Link href="https://github.com/Voloshin-Sergei">@Voloshin-Sergei</Link>
          </GitHubsItem>
          <GitHubsItem>
            <Link href="https://github.com/Maslovars">@Maslovars</Link>
          </GitHubsItem>
          <GitHubsItem>
            <Link href="https://github.com/YuliaEnik">@YuliaEnik </Link>
          </GitHubsItem>
        </GitHubsList>
        <Wrap>
          <Link href="https://rs.school/react/">REACT </Link>
          <p>2022</p>
        </Wrap>
      </FooterWrapper>
    </FooterSpan>
  );
};
