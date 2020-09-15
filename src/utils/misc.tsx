export const getRandomNumber = (max = 10, min = 1) =>
  Math.floor(Math.random() * max) + min
export const getRandomFruit = () => {
  const fruits = [
    'kiwi',
    'coconut',
    'grapes',
    'melon',
    'watermelon',
    'orange',
    'lemon',
    'banana',
    'pineapple',
    'red_apple',
    'green_apple',
    'pear',
    'peach',
    'cherries',
    'strawberry'
  ]

  return fruits[Math.floor(Math.random() * fruits.length)]
}
