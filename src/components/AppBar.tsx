import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import NetworkSwitcher from "./NetworkSwitcher";
import NavElement from "./nav-element";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SolPrice from "./getSolanaPrice";
import WalletDetail from "./getWalletInfo";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Navbar className="navigation" expand="lg">
      <Container>
        <Navbar.Brand>
          <div className="w-22 h-22 main_logo">
            <Link
              href="/"
              rel="noopener noreferrer"
              passHref
              className="text-secondary hover:text-white"
            >
              <Image
                src="/solarmoon_logo.png"
                alt="solarmoon logo"
                width={50}
                height={50}
                priority={true}
              ></Image>
            </Link>
          </div>
        </Navbar.Brand>
        <div className="solana_price">
          <Image
            src="/solana.png"
            alt="solana logo"
            width={14}
            height={14}
            className="solana_logo"
          ></Image>
        </div>
        <div className="solana_price">
          <SolPrice />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavElement
                label="Stats"
                href="/stats"
                navigationStarts={() => setIsNavOpen(false)}
              />
            </Nav.Link>
            <Nav.Link>
              <NavElement
                label="Tokenomics"
                href="/tokenomics"
                navigationStarts={() => setIsNavOpen(false)}
              />
            </Nav.Link>
            {/*<Nav.Link className="ml-auto">
              <WalletMultiButtonDynamic className="btn-ghost solana_price btn-sm rounded-btn text-lg ml-auto" />
            </Nav.Link>*/}
            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
  </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
