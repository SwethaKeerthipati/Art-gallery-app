import React from "react";
import Link from "next/link";
import Router from "next/router";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art Pieces</Link>
        </li>
      </ul>
    </nav>
  );
}
