import React from "react";
import { Row, Col } from "react-bootstrap";
import menu_food_one from "../../Resources/Images/Menu/menu_food_one.png";

import menu_food_two from "../../Resources/Images/Menu/menu_food_two.png";

import menu_food_three from "../../Resources/Images/Menu/menu_food_three.png";

import menu_food_four from "../../Resources/Images/Menu/menu_food_four.png";

import menu_food_five from "../../Resources/Images/Menu/menu_food_five.png";

import menu_food_six from "../../Resources/Images/Menu/menu_food_six.png";

import { Modal } from "react-bootstrap";
function ItemsList({ smShow_, setSmShow_ }) {
  const ItemList = [
    {
      id: 1,
      img: menu_food_one,
      title: "Palak Paneer",
      text: "Palak paneer is a classic curry dish",
      blueText: "more",
      Price: "₹ 350",
      modalimg: menu_food_one,
    },
    {
      id: 2,
      img: menu_food_two,
      title: "Chicken Cutlets",
      text: "PA cutlet is a piece of chicken breast",
      blueText: "more",
      Price: "₹ 200",
      modalimg: menu_food_two,
    },
    {
      id: 3,
      img: menu_food_three,
      title: "Rogan Josh",
      text: "PRogan josh is a type of Indian curry",
      blueText: "more",
      Price: "₹ 500",
      modalimg: menu_food_three,
    },
    {
      id: 4,
      img: menu_food_four,
      title: "Summer Rolls",
      text: "Summer rolls wraps cooked noodles",
      blueText: "more",
      Price: "₹ 180",
      modalimg: menu_food_four,
    },
    {
      id: 5,
      img: menu_food_five,
      title: "Broccoli Salad",
      text: "Broccoli Salad is a quick salad chock",
      blueText: "more",
      Price: "₹ 300",
      modalimg: menu_food_five,
    },
    {
      id: 6,
      img: menu_food_six,
      title: "Fusili Pasta",
      text: "Fusilli is a spiral or corkscrew shaped",
      blueText: "more",
      Price: "₹ 500",
      modalimg: menu_food_six,
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
                <div className="add_menu_txet" onClick={() => setSmShow_(true)}>
                  <h2>Add</h2>
                </div>
                <div className="menu_item_plus text-right">
                  <h1 className="size_20 line_27 color_white">+</h1>
                </div>
              </div>
            </div>
          </Col>
          <div>
            <Modal
              size="sm"
              show={smShow_}
              onHide={() => setSmShow_(false)}
              centered
              aria-labelledby="example-modal-sizes-title-sm"
              className="modal_wrapper"
            >
              <Modal.Body className="">
                <div className="d-flex justify-content-center item_modal_img">
                  <img src={item.modalimg} />
                </div>
                <div className="tem_modal_text">
                  <h1 className="size_20 line_22 color_black">Palak Paneer</h1>
                </div>
                <div className="modal_desc_para">
                  <p>
                    Palak Paneer is one of the most popular paneer dishes.
                    Paneer (Indian cottage cheese) is cooked with spinach and
                    spices in this creamy and flavorful curry. It pairs well
                    with naan, paratha or jeera rice.
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="modal-negative-btn">
                      <button>-</button>
                    </div>
                    <div className="modal-negative-btn_">
                      <button>1</button>
                    </div>
                    <div className="modal-negative-btn">
                      <button>+</button>
                    </div>
                  </div>
                  <div className="show_payment_btn">
                    <button>Add - ₹ 350 </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </Row>
      ))}
    </>
  );
}

export default ItemsList;
