import styled from 'styled-components/native';

import {Colors, Responsive} from '../../utils/theme';

export const ContainerView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.white};
`;

export const HeaderView = styled.View`
  margin-top: ${Responsive.heightPercentageToDP('2')}px;
  flex-direction: row;
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.white};
  height: ${Responsive.widthPercentageToDP('12')}px;
`;

export const BackImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('11.8')}px;
  height: ${Responsive.widthPercentageToDP('11.8')}px;
`;

export const BackImageView = styled.TouchableOpacity``;

export const DeleteImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('8')}px;
  height: ${Responsive.widthPercentageToDP('9')}px;
`;
