import React from 'react';
import { FooterSpan, FooterWrapper, Link, GitHubsList, LogoSchool, Wrap } from './footer.styled';

export const Footer: React.FC = () => {
  return (
    <FooterSpan>
      <FooterWrapper>
        <Link href="https://rs.school/">
          <LogoSchool src="/rs_school_js.svg" alt="rsschool" />
        </Link>
        <GitHubsList>
          <li>
            <Link href="https://github.com/Voloshin-Sergei">@Voloshin-Sergei</Link>
          </li>
          <li>
            <Link href="https://github.com/Maslovars">@Maslovars</Link>
          </li>
          <li>
            <Link href="https://github.com/YuliaEnik">@YuliaEnik </Link>
          </li>
        </GitHubsList>
        <Wrap>
          <Link href="https://rs.school/react/">REACT </Link>
          <p>2022</p>
        </Wrap>
      </FooterWrapper>
    </FooterSpan>
  );
};
