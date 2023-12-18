import { AddEventListener } from "./AddEventListener.js";
import { createStars } from "./createStars.js";

const addEventListener = new AddEventListener();

addEventListener.add();
createStars(400);
