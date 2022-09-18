import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import fish from "../assets/shop-image/fish.webp";
import baby from "../assets/shop-image/baby-care.webp";
import beauty from "../assets/shop-image/beauty.webp";
import biscuits from "../assets/shop-image/biscuits.webp";
import dairy from "../assets/shop-image/dairy.webp";
import drinks from "../assets/shop-image/drinks.webp";
import honey from "../assets/shop-image/honey.webp";
import household from "../assets/shop-image/household.webp";
import jelly from "../assets/shop-image/jelly.webp";
import organic from "../assets/shop-image/organic.webp";
import petCare from "../assets/shop-image/pet-care.webp";
import sauces from "../assets/shop-image/sauces.webp";
import seafood from "../assets/shop-image/seafood.webp";
import snacks from "../assets/shop-image/snacks.webp";
// import sports from "../assets/shop-image/sports";

const navApi = [
  {
    id: 1,
    name: "Fish & Meat",
    subItemOne: "Fish",
    subItemTwo: "Meat",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: fish,
  },
  {
    id: 2,
    name: "Fresh Seafood",
    subItemOne: "Fresh Seafood",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: seafood,
  },
  {
    id: 3,
    name: "Drinks",
    subItemOne: "Tea",
    subItemTwo: "Water",
    subItemThree: "Juice",
    subItemFour: "Coffe",
    subItemFive: "Energy Drinks",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: drinks,
  },
  {
    id: 4,
    name: "Milk & Dairy",
    subItemOne: "Dairy",
    subItemTwo: "Ice Cream",
    subItemThree: "Butter & Ghee",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: dairy,
  },
  {
    id: 5,
    name: "Organic Food",
    subItemOne: "Organic Food",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: organic,
  },
  {
    id: 6,
    name: "Honey",
    subItemOne: "Honey",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: honey,
  },
  {
    id: 7,
    name: "Sauces & Pickles",
    subItemOne: "Sauces",
    subItemTwo: "Pickles & Condiments",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: sauces,
  },
  {
    id: 8,
    name: "Jam & Jelly",
    subItemOne: "Jam & Jelly",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: jelly,
  },
  {
    id: 9,
    name: "Snacks & Instant",
    subItemOne: "Chocolate",
    subItemTwo: "Chips & Nuts",
    subItemThree: "Canned Food",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: snacks,
  },
  {
    id: 10,
    name: "Biscuits & Cakes",
    subItemOne: "Biscuits",
    subItemTwo: "Cakes",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: biscuits,
  },
  {
    id: 11,
    name: "Baby Care",
    subItemOne: "Baby Food",
    subItemTwo: "Baby Accesories",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: baby,
  },
  {
    id: 12,
    name: "Beauty & Health",
    subItemOne: "Bath",
    subItemTwo: "Cosmetics",
    downArrow: MdKeyboardArrowDown,
    rightArrow: MdKeyboardArrowRight,
    image: beauty,
  },
];

export default navApi;
