import { Box, createIcon, IconButton, Image } from "@chakra-ui/react";

export const HeartBorder = createIcon({
  displayName: "Heart",
  viewBox: "0 0 471.701 471.701",
  path: (
    <path
      fill="currentColor"
      d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"/>
  ),
});
export const HeartFilled = createIcon({
  displayName: "Heart",
  viewBox:"0 0 472.7 472.7",
  style:"enable-background:new 0 0 472.7 472.7",
  path: (
    <path
      fill="currentColor"
      d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
		c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
		c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
		c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
		C152.4,108.4,143.5,117.2,132.5,117.2z"/>
  ),
});

const FavoriteIcon = ({ isFavorited, event, colorScheme }) => {
  return (
    <>
      {
        isFavorited ?
          // <IconButton colorScheme={colorScheme} variant="ghost" bg="inherit" icon={<Image src="/heart-filled.svg" />} onClick={() => event(isFavorited)} />
          <IconButton variant="ghost" colorScheme={colorScheme} bg="inherit" icon={<HeartFilled boxSize={8} />} onClick={() => event(isFavorited)} />
          :
          // <IconButton colorScheme={colorScheme} variant="ghost" bg="inherit" icon={<Image src="/heart-border.svg" />} onClick={() => event(isFavorited)} />
        <IconButton variant="ghost" colorScheme={colorScheme} bg="inherit" icon={<HeartBorder boxSize={8} />} onClick={() => event(isFavorited)} />
      }
    </>
  );
};

export default FavoriteIcon;
