import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div id="about" className="w-full py-28 bg-black ">
      <div className="text-center mx-auto px-4 text-white max-w-[1240px]">
        <h1 className="py-4">A Growing Protocol Ecosystem</h1>
        <p className="text-slate-200 text-xl py-4 lg:w-3/4 mx-auto">
          The DeFi portocol system empowers developers, liquidity provider, and
          traders to praticipate in a financial marketplace that is open and
          accessible to all.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-6">
          {/* Card */}
          <AboutCard
            icon={<SiHiveBlockchain size={40} />}
            heading="Reliable, tamper-proof network"
            text="Use decentralization, trusted nodes, premium data, and
            cryptographic proofs to connect highly accurate and available
            data/APIs to any smart contract."
          />
          <AboutCard
            icon={<SiFsecure size={40} />}
            heading="Seamless connection to any API"
            text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
          />
          <AboutCard
            icon={<SiStrapi size={40} />}
            heading="Proven, ready-made solutions"
            text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
          />
          <AboutCard
            icon={<VscServerProcess size={40} />}
            heading="Secure off-chain computation"
            text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
          />
        </div>
        <div className="mt-8">
          <button>Use DeFi</button>
        </div>
      </div>
    </div>
  );
};

export default About;
