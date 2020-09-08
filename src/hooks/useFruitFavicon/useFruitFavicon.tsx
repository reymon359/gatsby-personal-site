import React from 'react';

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
];

const changeFavicon = (origin = 'https://ramonmorcillo.com') => {
  const head = document.head ?? document.getElementsByTagName('head')[0];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  const oldLink = document.querySelectorAll(`[href*='/favicon']`)[0];
  const link = document.createElement('link');

  link.className = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = `${origin}/images/favicon/${randomFruit}.png`;
  oldLink && head.removeChild(oldLink);

  const nodes = Array.from(document.getElementsByClassName('dynamic-favicon'))
  nodes?.forEach(node => {
    head.removeChild(node);
  })

  head.appendChild(link);
};

export const useFruitFavicon = () => {
  const location = window?.location;
  console.log(location);

  React.useEffect(() => {
    console.log('location changed', location);
    changeFavicon(location.origin);
  }, [location.pathname]);
};
