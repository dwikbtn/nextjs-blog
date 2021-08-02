import Image from "next/image";
import searchIcon from "../../public/images/icons/search.svg";
import style from "./search.module.scss";
export default function SearchBar() {
  return (
    <div className={style.searchBar}>
      <Image src={searchIcon} alt="search button" />
      <form>
        <input
          type="text"
          placeholder="Search..."
          className={style.noOutline}
        />
      </form>
    </div>
  );
}
