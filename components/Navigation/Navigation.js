// import React from "react";
// import Link from "next/link";
// import Router from "next/router";

// export default function Navigation() {
//   return (
//     <nav>
//       <li>
//         <Link href="/">Spotlight</Link>
//       </li>
//       <li>
//         <Link href="/art-pieces">Art Pieces</Link>
//       </li>
//     </nav>
//   );
// }

import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  gap: 20px;
  font-weight: bold;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightblue;
  }
`;

export default function Navigation({ artPieces }) {
  const router = useRouter();
  return (
    <NavContainer>
      <Link href="/art-pieces">
        <NavLink>Art Pieces</NavLink>
      </Link>
      <Link href="/">
        <NavLink>Spotlight</NavLink>
      </Link>
      <Link href="/favorites">
        <NavLink>My Favorites</NavLink>
      </Link>
    </NavContainer>
  );
}
