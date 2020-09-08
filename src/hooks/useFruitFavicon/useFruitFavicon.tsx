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

document.head || (document.head = document.getElementsByTagName('head')[0]);
const head = document.head ?? document.getElementsByTagName('head')[0];

const changeFavicon = (origin = 'https://ramonmorcillo.com') => {
  console.log('vhanging favicon');
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  console.log(randomFruit);
  const oldLink = document.querySelectorAll(`[href*='/favicon']`)[0];
  console.log(oldLink);
  const link = document.createElement('link');
  // const  oldLink = document.getElementById('dynamic-favicon');
  link.className = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = `${origin}/images/favicon/${randomFruit}.png`;
  console.log(link);
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  const nodes = document.getElementsByClassName('dynamic-favicon');
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].parentNode.removeChild(nodes[i]);
  }

  document.head.appendChild(link);
};
const els = document.querySelectorAll("a[href='http://domain.com']");

export const useFruitFavicon = () => {
  const location = window?.location;
  console.log(location);

  React.useEffect(() => {
    console.log('location changed', location);
    changeFavicon(location.origin);
  }, [location.pathname]);

  // const [isMobile, setMobile] = React.useState(false);

  // React.useEffect(() => {
  //   // const userAgent =
  //   //   typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
  //   // const mobile = Boolean(
  //   //   userAgent.match(
  //   //     /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  //   //   )
  //   // );
  //   // setMobile(mobile);
  // }, []);

  // return {isMobile};
  // return (  <link id="favicon" rel="icon" href="images/favicon/pear.png" type="image/x-icon"  />)
};
