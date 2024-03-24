import React, { useState} from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Navbar() {
  const [dropItems, setdropItems] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { label: "Home", link: "#" },
    { label: "Electronics", link: "#" },
    { label: "Books", link: "#" },
    { label: "Music", link: "#" },
    { label: "Movies", link: "#" },
    { label: "Clothing", link: "#" },
    { label: "Games", link: "#" },
  ]);

  const [moreMenuItems, setmoreMenuItems] = useState([
    { label: "Travel", link: "#" },
    { label: "Furniture", link: "#" },
    { label: "electronics", link: "#" },
    { label: "Botanical", link: "#" },
    { label: "Category Name", link: "#" },
  ]);

  function handleAccordian() {}
  return (
    <div className="nav">
      <span className="logoName">
        <h2>E-COMM</h2>
      </span>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
        <div className="accordian" onClick={() => setdropItems(!dropItems)}>
          <span>
            More
            <ExpandMoreIcon />
          </span>
          {dropItems && moreMenuItems.length > 0 && (
            <div className="moreMenu">
                {moreMenuItems.map((item, index) => (
                  <div className='moreMenuItem'key={index}>
                    {item.label}
                  </div>
                ))}   
            </div>
          )}
        </div>
      </ul>

      <span className="searchBar">
        <SearchIcon sx={{ color: "white" }} />{" "}
        <input type="text" placeholder="Search something" />
      </span>
    </div>
  );
}

export default Navbar;
