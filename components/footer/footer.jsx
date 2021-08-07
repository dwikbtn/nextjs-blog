import Social from "../socmedIcon/Social";
import style from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className="containers">
        <div className={style["footer-context"]}>
          <div className="by">
            Blog by
            <span>
              {" "}
              <a
                href="http://dwidarma.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dwi Darma{" "}
              </a>
            </span>
            design by
            <span>
              {" "}
              <a
                href="https://twitter.com/iiCe89"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daniel
              </a>
            </span>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
