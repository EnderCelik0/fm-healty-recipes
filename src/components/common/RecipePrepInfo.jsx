import servingsIcon from "/assets/images/icon-servings.svg";
import prepIcon from "/assets/images/icon-prep-time.svg";
import cookIcon from "/assets/images/icon-cook-time.svg";

export default function RecipePrepInfo({ servings, prepMinutes, cookMinutes }) {
  return (
    <ul className="flex flex-wrap gap-4">
      <li className="flex items-center gap-1.5">
        <img src={servingsIcon} alt="" />
        Servings: {servings}
      </li>
      <li className="flex items-center gap-1.5">
        <img src={prepIcon} alt="prepare time icon" />
        Prep: {prepMinutes} mins
      </li>
      <li className="flex items-center gap-1.5">
        <img src={cookIcon} alt="cooking time icon" />
        Cook: {cookMinutes} mins
      </li>
    </ul>
  );
}
