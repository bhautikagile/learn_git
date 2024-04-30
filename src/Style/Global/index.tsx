import AntdStyle from '../Antd';
import { HeightWidth } from '../Common/HeightWidth';
import { Spacing } from '../Common/Spacing';
import { Typography } from '../Common/Typography';
import { Common } from '../Common/Common';
import { Reset } from '../Common/Reset';

const GlobalStyle = () => {
  return (
    <>
      <Reset />
      <Common />
      {/* <Fonts />
      <Grid />
      <Flex /> */}
      <Spacing />
      <HeightWidth />
      <Typography />
      <AntdStyle />
    </>
  );
};

export default GlobalStyle;
