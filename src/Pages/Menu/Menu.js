import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./menu.css";

//Images and logos used in this page
import MenuAvatar from "../../Resources/Images/Menu/Avatar.svg";
import foodItem from "../../Resources/Images/Menu/foodItem.svg";
import menu_search from "../../Resources/Images/Menu/menu_search.svg";

//Components in the Page

import MenuCarousel from "../../Components/Carousel/MenuCarousel";
import ItemList from "../../Components/MenuItemList/ItemsList";

function Menu() {
  return (
    <Container>
      <div className="menu_page_main_wrapper">
        <Row className="menu_heading_container">
          <Col className="px-0 " xs={8}>
            <div>
              <h1 className="size_20 line_27 color_black">
                Welcome to <span id="aroma_heading">Aroma,</span>
              </h1>
            </div>
            <div>
              <h1 className="size_20 line_27 color_black">Shagun Bhardwaj !</h1>
            </div>
          </Col>
          <Col className="px-0 d-flex justify-content-end">
            <div>
              <img src={MenuAvatar} alt=".." />
            </div>
          </Col>
        </Row>
        <Row className="menu_promo_code_container">
          <Col className="px-0">
            <div className="menu_sale_section col-12 px-0 d-flex">
              <div className="col-5 d-flex justify-content-center align-items-center">
                <div className="col-12 px-0">
                  <div>
                    <h1 className="size_16 line_22 color_blue_dark text-center">
                      Monsoon Sale!
                    </h1>
                  </div>
                  <div>
                    <h1 className="size_20 line_27 color_blue_dark text-center">
                      25% Off
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-3 px-0 promo_code_wrapper">
                <div className="d-flex align-items-end justify-content-center promo_code_container">
                  <div className="menu_promro_wrapper">
                    <h1 className="size_16 line_22 color_blue_dark">MON25</h1>
                  </div>
                </div>
              </div>
              <div className="col-4 px-0 d-flex justify-content-center">
                <div className="food_item_wrapper">
                  <img src={foodItem} alt="..." />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <div className="menu_search_wrapper d-flex">
              <div className="menu_toggler_heading">
                <h1 className="size_16 line_22 color_black">Veg only</h1>
              </div>
              <div>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </Col>
          <Col className="px-0">
            <div className="d-flex justify-content-end">
              <div className="menu_toggler_input">
                <span>
                  <img src={menu_search} alt=".." />
                </span>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 menu_deals_section">
            <h1 className="size_16 line_22 color_black">Restaurant Special</h1>
          </Col>
        </Row>
        {/* //Carousel Component */}
        <Row>
          <Col className="px-0">
            <MenuCarousel />
          </Col>
        </Row>
        {/* //Menu Item Component */}
        <div>
          <ItemList />
        </div>
      </div>
    </Container>
  );
}

export default Menu;
