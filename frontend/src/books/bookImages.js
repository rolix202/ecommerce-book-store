import image1 from "./images/a.png"
import image2 from "./images/b.png"
import image3 from "./images/c.png"
import image4 from "./images/d.png"

import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"

import homeImg_1 from "../assets/images/a.png"
import homeImg_2 from "../assets/images/b.png"
import homeImg_3 from "../assets/images/c.png"
import homeImg_4 from "../assets/images/d.png"

import homeImg_5 from "../assets/images/e.png"
import homeImg_6 from "../assets/images/f.png"
import homeImg_7 from "../assets/images/g.png"
import homeImg_8 from "../assets/images/h.png"


const images = [image1, image2, image3, image4, homeImg_1, homeImg_2, homeImg_3, homeImg_4, homeImg_5, homeImg_6, homeImg_7, homeImg_8];

export default images;

// We can use one export for all the images, like the one you created above, instead of re exporting this one down, you can just add them to the image array above and fetch when only, where ever you are using it

export const lastViewImg = [img1, img2, img3, img4];

