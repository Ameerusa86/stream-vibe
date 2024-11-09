import React from "react";
import Wrapper from "./Wrapper";
import { footerLinks } from "@/constants/FooterLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black-06">
      {/* Footer Links */}
      <Wrapper>
        <div className="flex items-start justify-between gap-8">
          {footerLinks.map((link, index) => (
            <div className="flex flex-col gap-8" key={index}>
              <h1 className="text-lg font-semibold text-white">{link.title}</h1>
              <ul className="gap-3 flex flex-col">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-white hover:text-primary-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
      {/* Copyrights */}
      <div></div>
    </div>
  );
};

export default Footer;
