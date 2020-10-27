import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 3504 511" height="25px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g fill-rule="nonzero"><path fill={fill} d="M605.9 0L503.7 511H362.08L215.35 273.02 167.9 511H0L102.2 0h141.62l146.73 237.98L438 0h167.9zM977.47 421.94H782.56L731.46 511H549.69L875.27 0h169.36l121.18 511H994.26l-16.79-89.06zm-24.09-124.1l-24.82-130.67-75.19 130.67h100.01zM1314 0h172.28l-102.2 511H1211.8L1314 0zM1587.75 0h172.28l-75.19 377.41h230.68L1888.51 511h-402.96l102.2-511zM2056.41 0h172.28l-102.2 511h-172.28l102.2-511zM2941.9 0l-100.74 511h-156.95l45.26-232.87-143.81 186.88h-75.92l-78.84-183.96L2384.91 511h-156.95l102.2-511h140.16l110.96 271.56L2795.17 0h146.73zM3314.93 421.94h-194.91l-51.1 89.06h-181.77L3212.73 0h169.36l121.18 511h-171.55l-16.79-89.06zm-24.09-124.1l-24.82-130.67-75.19 130.67h100.01z"/></g></svg>

  );
} 