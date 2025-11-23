import socialInstagram from "/assets/images/icon-instagram.svg";
import socialTiktok from "/assets/images/icon-tiktok.svg";
import socialBluesky from "/assets/images/icon-bluesky.svg";

const socials = [
  { id: 1, img: socialInstagram, to: "" },
  { id: 2, img: socialTiktok, to: "" },
  { id: 3, img: socialBluesky, to: "" },
];

export default function Footer() {
  return (
    <footer className="mx-auto my-10 flex w-full max-w-6xl justify-between px-8 lg:px-0">
      <p>Made with ❤️ and 🥑</p>

      <ul className="flex gap-6">
        {socials.map((social) => (
          <li key={social.id} className="cursor-pointer">
            <img src={social.img} alt={social.img} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
