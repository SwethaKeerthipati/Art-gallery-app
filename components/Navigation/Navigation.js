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
// import Spotlight from "../Spotlight/Spotlight";

export default function Navigation({ artPieces }) {
  const router = useRouter();

  return (
    <nav>
      <li>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
    </nav>
  );
}
