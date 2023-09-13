// Next, React
import { FC, useEffect } from "react";
import Link from "next/link";
import Typewriter from "../../components/Typewriter";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Components
import { RequestAirdrop } from "../../components/RequestAirdrop";
import pkg from "../../../package.json";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";
import MoonPrice from "components/getMoonPrice";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const solana = "Solana's";
  const withheld = "'Witheld Account State'";
  const token = "'Token-2022'";

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div>
      {/*<div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div className="mockup-code border-2 border-[#5252529f] p-6 my-2">
            <pre data-prefix=">">
              <code className="truncate">
                <Typewriter
                  text="$ sudo burn solarmoon 🔥"
                  delay={100}
                ></Typewriter>
              </code>
            </pre>
          </div>
  </div>*/}
      <Row className="home_content">
        <Col>
          <h1 className="hero_text">
            SOLAR<span className="moon">MOON</span>, {solana} FIRST EVER
            Deflationary Token.
          </h1>
          <p className="homepage_paragraphs">
            Welcome to SolarMoon, {solana} one true moonshot! Using the new
            Token standard on Solana {token} we have created the first ever
            deflationary token on the Solana network. 5% of every transfer is
            taxed and burnt forever!
          </p>
          <p className="homepage_paragraphs">
            All transfers are taxed and build up in the {withheld} on the
            Token-2022 protocol, the SolarMoon team revoked their access to the{" "}
            {withheld} meaning nobody has access to theses tokens and they are
            locked forever.
          </p>
          <p className="homepage_paragraphs">Join the Astronauts today 🚀🌖</p>
          <a
            target="_blank"
            href="https://birdeye.so/token/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi?chain=solana"
            rel="noreferrer"
          >
            <p className="buy_now">
              <b>View Chart</b>
            </p>
          </a>
        </Col>
        <Col>
          <Image
            src="/Image_2.svg"
            alt="Astronaut and Moon"
            className="stats_image"
            width={550}
            height={550}
          ></Image>
        </Col>
      </Row>
      {/*<Row>
        <Col>
          <Link
            href="https://birdeye.so/token/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi?chain=solana"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            className="text-secondary hover:text-white"
          >
            <Image
              src="/logo-birdeye.png"
              alt="birdeye logo"
              width={200}
              height={200}
              priority={true}
            ></Image>
          </Link>
        </Col>
        <Col>
          <Link
            href="https://jup.ag/swap/MOON-SOL"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            className="text-secondary hover:text-white"
          >
            <Image
              src="/jupiter-logo.svg"
              alt="birdeye logo"
              width={40}
              height={40}
              priority={true}
            ></Image>
          </Link>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      */}
    </div>
  );
};
