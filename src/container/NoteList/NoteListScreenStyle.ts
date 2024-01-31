import styled from 'styled-components/native';

import {Colors, Fonts, Responsive} from '../../utils/theme';

export const ContainerView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const NoteItemView = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const ItemText = styled.Text`
  font-family: ${Fonts.ThemeRoboto};
  font-size: ${Responsive.convertFontScale('13')}px;
  color: ${Colors.black};
  line-height: ${Responsive.convertFontScale('19.6')}px;
  margin-left: ${Responsive.widthPercentageToDP('3')}px;
`;

export const BlankView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${Responsive.heightPercentageToDP('5.5')}px;
`;

export const BlankImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('86')}px;
  height: ${Responsive.widthPercentageToDP('79')}px;
`;

export const BoldText = styled.Text`
  font-family: ${Fonts.ThemeOptama};
  font-size: ${Responsive.convertFontScale('48')}px;
  color: ${Colors.black};
  line-height: ${Responsive.convertFontScale('58')}px;
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
`;

export const BoldTextView = styled.View`
  margin-top: ${Responsive.heightPercentageToDP('6')}px;
  align-items: center;
  justify-content: center;
`;

export const DescText = styled.Text`
  font-family: ${Fonts.ThemeRoboto};
  font-size: ${Responsive.convertFontScale('16')}px;
  color: ${Colors.gray68};
  line-height: ${Responsive.convertFontScale('22')}px;
  margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
  margin-top: ${Responsive.heightPercentageToDP('3')}px;
  text-align: center;
`;

export const GoImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('18')}px;
  height: ${Responsive.widthPercentageToDP('18')}px;
  margin-top: ${Responsive.heightPercentageToDP('4.8')}px;
`;

export const GoImageView = styled.TouchableOpacity``;
