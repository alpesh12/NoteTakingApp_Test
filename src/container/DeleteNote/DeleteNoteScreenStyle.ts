import styled from 'styled-components/native';

import {Colors, Fonts, Responsive} from '../../utils/theme';

export const ContainerView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.white};
`;

export const BoldText = styled.Text`
  font-family: ${Fonts.ThemeOptama};
  font-size: ${Responsive.convertFontScale('48')}px;
  color: ${Colors.black};
  line-height: ${Responsive.convertFontScale('58')}px;
  margin-horizontal: ${Responsive.widthPercentageToDP('10')}px;
  text-align: center;
`;

export const BoldTextView = styled.View`
  margin-top: ${Responsive.heightPercentageToDP('2')}px;
  align-items: center;
  justify-content: center;
`;

export const DescText = styled.Text`
  font-family: ${Fonts.ThemeRoboto};
  font-size: ${Responsive.convertFontScale('16')}px;
  color: ${Colors.gray68};
  line-height: ${Responsive.convertFontScale('22')}px;
  margin-horizontal: ${Responsive.widthPercentageToDP('10')}px;
  margin-top: ${Responsive.heightPercentageToDP('3')}px;
  text-align: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  border-radius: ${Responsive.heightPercentageToDP('3.5')}px;
  border: 1px solid ${Colors.redBorder};
  background: ${Colors.redLight};
  margin-top: ${Responsive.heightPercentageToDP('7')}px;
  width: ${Responsive.widthPercentageToDP('85')}px;
  height: ${Responsive.heightPercentageToDP('7')}px;
  align-items: center;
  justify-content: center;
`;

export const DeleteButtonText = styled.Text`
  color: ${Colors.red};
  text-align: center;
  font-family: ${Fonts.ThemeMedium};
  font-size: ${Responsive.convertFontScale('16')}px;
  line-height: ${Responsive.convertFontScale('22')}px;
`;

export const DeleteView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${Responsive.heightPercentageToDP('4.5')}px;
`;

export const DeleteImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('86')}px;
  height: ${Responsive.widthPercentageToDP('79')}px;
`;
