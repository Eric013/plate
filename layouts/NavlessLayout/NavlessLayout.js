import React from 'react';

type Props = {
  children?: Element<any>,
};

export default ({ children }: Props) => (
  <div>
    <style jsx global>
      {
        `
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        background-image: url('/static/img/plateGradient.png');
        font-family: 'Fira Sans', sans-serif;
      }
    `
      }
    </style>
    {children}
  </div>
);
