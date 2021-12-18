// Hook
import WindowSizeInfo from '../../hooks/getWindowSize';

// Component
import SmallView from './smallView/smallView';

const Hero = () => {
  const {width} = WindowSizeInfo();
  return (
    width >= 768 ? (
      <h2>Holaa</h2>
    ) : (
      <SmallView />
    )
  )
}
export default Hero;