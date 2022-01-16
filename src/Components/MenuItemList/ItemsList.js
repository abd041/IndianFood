import React from "react";
import { Row, Col } from "react-bootstrap";
import menu_food_one from "../../Resources/Images/Menu/menu_food_one.png";

import menu_food_two from "../../Resources/Images/Menu/menu_food_two.png";

import menu_food_three from "../../Resources/Images/Menu/menu_food_three.png";

import menu_food_four from "../../Resources/Images/Menu/menu_food_four.png";

import menu_food_five from "../../Resources/Images/Menu/menu_food_five.png";

import menu_food_six from "../../Resources/Images/Menu/menu_food_six.png";
function ItemsList() {
  const ItemList = [
    {
      img: menu_food_one,
      title: "Palak Paneer",
      text: "Palak paneer is a classic curry dish",
      blueText: "more",
      Price: "₹ 350",
    },
    {
      img: menu_food_two,
      title: "Chicken Cutlets",
      text: "PA cutlet is a piece of chicken breast",
      blueText: "more",
      Price: "₹ 200",
    },
    {
      img: menu_food_three,
      title: "Rogan Josh",
      text: "PRogan josh is a type of Indian curry",
      blueText: "more",
      Price: "₹ 500",
    },
    {
      img: menu_food_four,
      title: "Summer Rolls",
      text: "Summer rolls wraps cooked noodles",
      blueText: "more",
      Price: "₹ 180",
    },
    {
      img: menu_food_five,
      title: "Broccoli Salad",
      text: "Broccoli Salad is a quick salad chock",
      blueText: "more",
      Price: "₹ 300",
    },
    {
      img: menu_food_six,
      title: "Fusili Pasta",
      text: "Fusilli is a spiral or corkscrew shaped",
      blueText: "more",
      Price: "₹ 500",
    },
  ];
  return (
    <>
      {ItemList.map((item, index) => (
        <Row key={index} className="d-flex menu_list_items_main_wrapper">
          <Col className="px-0">
            <div className="d-flex">
              <div class="checkboxFour">
                <input
                  type="checkbox"
                  value="1"
                  id="checkboxFourInput"
                  name=""
                  className="checbox_class"
                />
                <label for="checkboxFourInput"></label>
                <div class="checkboxFour_"></div>
              </div>
              <div className="menu_list_heading">
                <h1 className="size_16 line_22 color_black">{item.title}</h1>
              </div>
            </div>
            <div>
              <h1 className="size_10 line_14 color_black">
                {item.text}
                <span style={{ color: "#0009E7", paddingLeft: "4px" }}>
                  {item.blueText}
                </span>
              </h1>
            </div>
            <div className="maenu_item_pricing">
              <h1 className="size_14 line_19 color_black">{item.Price}</h1>
            </div>
          </Col>
          <Col className="px-0 d-flex justify-content-end" xs={4}>
            <div className="menu_food_item_img">
              <img src={item.img} alt="..." />
              <div className="menu_img_btn d-flex justify-content-center">
                <div className="add_menu_txet">
                  <h2>Add</h2>
                </div>
                <div className="menu_item_plus text-right">
                  <h1 className="size_20 line_27 color_white">+</h1>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
}

export default ItemsList;
