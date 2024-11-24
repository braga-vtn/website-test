import React from 'react';

interface SvgOpenAIProps {
  width?: string;
  height?: string;
  fill?: string;
}

const SvgVistune: React.FC<SvgOpenAIProps> = (props) => {
  const { width = "1.2rem", height = "1.2rem", fill = "currentColor" } = props;

  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width={width} height={height} fill={fill} viewBox="0 0 1348.000000 1348.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1348.000000) scale(0.100000,-0.100000)"
        fill={fill} stroke="none">
        <path d="M19 11373 c6 -10 165 -256 354 -548 l344 -530 6000 -3 6001 -2 376
   544 c207 300 376 547 376 550 0 3 -3029 6 -6730 6 -6407 0 -6730 -1 -6721 -17z"/>
        <path d="M1442 9187 c4 -19 3772 -5926 3779 -5927 4 0 757 1094 1674 2430
   l1668 2430 664 0 c614 0 665 -1 659 -16 -4 -10 -904 -1321 -2002 -2916 -1097
   -1594 -1997 -2904 -2000 -2912 -4 -11 577 -930 610 -962 8 -9 703 989 2739
   3935 l2728 3946 -1978 3 -1978 2 -20 -23 c-11 -12 -629 -910 -1374 -1995 -898
   -1307 -1358 -1969 -1365 -1962 -5 5 -575 902 -1266 1992 l-1257 1983 -642 3
   c-537 2 -642 0 -639 -11z"/>
      </g>
    </svg>
  )
}

export default SvgVistune