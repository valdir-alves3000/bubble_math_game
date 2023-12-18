import { AddEventListener } from "./addEventListener.js";
import { createStars } from "./createStars.js";

const addEventListener = new AddEventListener();

addEventListener.add();
createStars(400);
