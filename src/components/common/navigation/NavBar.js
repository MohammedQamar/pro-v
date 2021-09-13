import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <div className="image">
        <Link href="/">
          <img src="/logo.svg" />
        </Link>
      </div>
      <ul className="menu">
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a className="home-menu">Home</a>
          </Link>
        </li>
        <li className={router.pathname == "/learn" ? "active" : ""}>
          <Link href="/learn">courses</Link>
        </li>
        <li className={router.pathname == "/projects" ? "active" : ""}>
          <Link href="/projects">
            <a className="project-menu">projects</a>
          </Link>
        </li>
        <li className={router.pathname == "/blog" ? "active" : ""}>
          <Link href="/blog">
            <a className="blog-menu">blog</a>
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 70px 1fr;
  /* background-color: var(--primary-bcg); */
  background: rgba(2, 12, 12, 1);
  color: white;
  text-transform: uppercase;
  .image {
    /* display: none; */
    align-self: flex-end;
    padding-left: 30px;
    cursor: pointer;
  }

  ul {
    display: flex;
    padding-right: 30px;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    align-self: center;
    margin-right: 20px;
  }
  li:hover {
    color: var(--button-bcg);
    cursor: pointer;
  }

  .active {
    border-bottom: solid 2px var(--button-bcg);
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 70px 1fr;
    bottom: 0;
    background: rgba(2, 12, 12, 1);
    color: white;
    text-transform: uppercase;

    .home-menu,
    .project-menu {
      display: none;
    }

    li {
      font-size: 14px;
      margin-right: 5px;
    }
    .image {
      padding-left: 5px;
      cursor: pointer;
    }

    ul {
      padding-right: 5px;
    }
  }
`;

export default NavBar;
