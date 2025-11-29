import { Link } from "react-router-dom";

export default function ShopBox({ title, img, link }) {
  return (
    <div className="box">
      <div className="box-content">
        <h3>{title}</h3>

        <div
          className="box-img"
          style={{ backgroundImage: `url(${img})` }}
        ></div>

        <p>
          <Link to={link}>See more</Link>
        </p>
      </div>
    </div>
  );
}
