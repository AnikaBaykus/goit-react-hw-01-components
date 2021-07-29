// генерирует случайный цвет
export default function generateColor() {
  return '#' + Math.random().toString(16).substr(-6);
}
