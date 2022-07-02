import { useWindowDimensions } from 'react-native';

const useOrientation = () => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  return { isPortrait: height > width };
};

export default useOrientation;