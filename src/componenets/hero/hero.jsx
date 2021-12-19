// Hook
import WindowSizeInfo from '../../hooks/getWindowSize';

// Component
import SmallView from './smallView/smallView';
import Biggest from './biggestView/biggest';

const Hero = () => {
  const {width} = WindowSizeInfo();
  return (
    width >= 768 ? (
      <Biggest />
    ) : (
      <SmallView />
    )
  )
}
export default Hero;