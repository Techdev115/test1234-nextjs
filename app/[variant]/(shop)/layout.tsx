import Link from "next/link";

export default function Page({ children }: any) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">shop</Link>
        </li>
        <li>
          <Link href="/product">product</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
