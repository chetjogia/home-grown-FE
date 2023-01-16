import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
export default function NavBarLogIn() {
  const { logout } = useAuth();
  const router = useRouter();

  const Dropdown = () => {
    const dropdown = document.querySelector("ul");
    const hamburgerButton = document.querySelector("#hamburgerButton");
    dropdown.classList.toggle("show");
    hamburgerButton.classList.toggle("show");
  }


  async function handleClick() {
    await logout();
    router.push("/");
  }
  return (
    
    <nav className="mainNav">
      <div className="logo">
        <Image
          className="logo"
          src="/illustrations/logo.png"
          width={50}
          height={50}
        />
      </div>
      <ul>
        <Link href="/listings" style={{ textDecoration: "none" }}>
          <li>Listings</li>
        </Link>
        <Link href="/" style={{ textDecoration: "none" }} legacyBehavior>
          <a onClick={handleClick} style={{ textDecoration: "none" }}>
            <li>Log Out</li>
          </a>
        </Link>
        <Link href="/dashboard" style={{ textDecoration: "none" }}>
          <li>Dashboard</li>
        </Link>
        <Link href="/post" style={{ textDecoration: "none" }}>
          <li>Post</li>
        </Link>
      </ul>
      <button id="hamburgerButton" onClick={ Dropdown }>MENU</button>
    </nav>
  
  );
}
