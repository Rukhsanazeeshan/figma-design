import Link from "next/link";


interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Header({ font }: HeaderProps) {
  return (
    <div className={`${font.className} links-parent`}>
      <ul className="links">
        <li className="link"><Link href="/works">Works</Link></li>
        <li className="link"><Link href="/blog">Blog</Link></li>
        <li className="link"><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}