const canvas = document.getElementById("myCanavs");
const ctx = canvas.getContext("2d");
// getContext() method return canvas drawing context
// drawing context 可以畫圖

const unit = 20;
const row = canvas.height / unit; // 320 / 20 = 16
const col = canvas.width / unit; // 320 / 20 = 16

let snake = []; // array中每個元素, 皆是一個物件
// 物件 -> 儲存x, y座標

snake[0] = {
  x: 80,
  y: 0,
};
snake[1] = {
  x: 60,
  y: 0,
};
snake[2] = {
  x: 40,
  y: 0,
};
snake[3] = {
  x: 20,
  y: 0,
};

for (let i = 0; i < snake.length; i++) {
  if (i == 0) {
    ctx.fillStyle = "lightgreen";
  } else {
    ctx.fillStyle = "lightblue";
  }
  ctx.strokeStyle = "white";
  // (x, y, width, height)
  ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
  ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
}
