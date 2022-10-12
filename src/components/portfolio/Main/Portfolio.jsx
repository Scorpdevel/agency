import { useEffect, useState } from "react";
import PortfolioList from "../Components/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  // contentPortfolio,
} from "../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Webseiten");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Webseiten",
      title: "Webseiten",
    },
    {
      id: "Werbefiguren",
      title: "Werbefiguren",
    },
    {
      id: "Logos",
      title: "Logos",
    },
    {
      id: "Produkt Fotos",
      title: "Produkt Fotos",
    },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "Webseiten":
        setData(featuredPortfolio);
        break;
      case "Werbefiguren":
        setData(webPortfolio);
        break;
      case "Logos":
        setData(mobilePortfolio);
        break;
      case "Produkt Fotos":
        setData(designPortfolio);
        break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div id="portfolio" className="portfolio_Container">
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="line"></div>
      <ul style={{'flexWrap': 'wrap', "display": "flex","justifyContent": "space-evenly", "alignItems": "center", "width" : "80%"}}>
        {list.map((item) => (
          <PortfolioList item={item} selected={selected} setSelected={setSelected}/>
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img loading="lazy" src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
