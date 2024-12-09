import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Docs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "Terms", href: "#" },
    ],
  },
];


export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-12 text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col">
        <div className="flex items-center text-grey">
          <Logo className="mr-4 h-4 w-4" />
          <span>SolopreneurOS</span>
        </div>
        <div className="mt-4 flex space-x-4 text-grey">
          <TwitterIcon />
          <GithubIcon />
        </div>
      </div>
     
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[12rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title}>
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
