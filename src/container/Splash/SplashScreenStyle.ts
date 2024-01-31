import styled from 'styled-components/native';

import {Colors, Responsive} from '../../utils/theme';

export const SplashContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const FlairLogoImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('50')}px;
  height: 40px;
  margin-bottom: 30px;
`;

export const Indicator = styled.ActivityIndicator`
  width: 50px;
  height: 50px;
`;

// export const FlairLogoImage = styled.Image`
//     width: ${Platform.OS === 'android'? Responsive.widthPercentageToDP('25'):Responsive.widthPercentageToDP('50')}px;
//     height: 40px;
//     margin-bottom: 30px;
// `

// export const Indicator = styled.ActivityIndicator`
//     width: ${Platform.OS === 'android'?20 :50}px;
//     height: ${Platform.OS === 'android'?20 :50}px;
// `
