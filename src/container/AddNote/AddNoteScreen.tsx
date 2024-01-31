import React, {useEffect, useRef, useState} from 'react';

// Mics Constants
import {
  BackImage,
  BackImageView,
  ContainerView,
  DeleteImage,
  HeaderView,
} from './AddNoteScreenStyle';
import {Colors, Images, Responsive, Screens} from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import QuillEditor, {
  QuillToolbar,
  SelectionChangeData,
  TextChangeData,
} from 'react-native-cn-quill';
import {StyleSheet, StatusBar} from 'react-native';
import {CustomContainer} from './CustomContainer';
import {customFonts} from './customFonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageKeys} from '../../utils/theme/constants';

// Components

export default function AddNoteScreen() {
  //Variable
  const navigation = useNavigation();
  const _editor = useRef();
  const [html, setHtml] = useState('');
  // useEffect

  useEffect(() => {
    getNotes()
      .then(note => {
        console.log('note', note);
        setHtml(note);
      })
      .catch(() => {});
  }, []);

  const getNotes = async () => {
    try {
      const existingNotes = await AsyncStorage.getItem(
        asyncStorageKeys.noteKey,
      );
      console.log('existingNotes ==', existingNotes);
      return existingNotes ? JSON.parse(existingNotes) : [];
    } catch (error) {
      console.error('Error getting notes:', error);
      return [];
    }
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressDelete = () => {
    navigation.navigate(Screens.DeleteNoteScreen, {id: 3});
  };

  const getCurrentDate = () => {
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  };

  const handleSelectionChange = async (data: SelectionChangeData) => {
    const {range} = data;
    if (range) {
      if (range.length === 0) {
        console.log('User cursor is on', range.index);
      } else {
        var text = await _editor.current?.getText(range.index, range.length);
        console.log('User has highlighted', text);
      }
    } else {
      console.log('Cursor not in the editor');
    }
  };

  const handleTextChange = (data: TextChangeData) => {
    if (data.source === 'api') {
      console.log('An API call triggered this change.');
    } else if (data.source === 'user') {
      console.log('A user action triggered this change.');
    }
  };

  const customHandler = (name: string, value: any) => {
    if (name === 'image') {
      _editor.current?.insertEmbed(0, 'image', 'https://picsum.photos/200/300');
    } else if (name === 'clock') {
      _editor.current?.insertText(0, `Today is ${getCurrentDate()}`, {
        bold: true,
        color: 'red',
      });
    } else {
      console.log(`${name} clicked with value: ${value}`);
    }
  };

  // Render Component
  return (
    <ContainerView>
      <HeaderView>
        <BackImageView onPress={onPressBack}>
          <BackImage source={Images.backImage} resizeMode="contain" />
        </BackImageView>
        <BackImageView onPress={onPressDelete}>
          <DeleteImage source={Images.deleteIcon} resizeMode="contain" />
        </BackImageView>
      </HeaderView>
      {html && (
        <QuillEditor
          webview={{
            nestedScrollEnabled: true,
          }}
          container={CustomContainer} // not required just to show how to pass cusom container
          style={[styles.input, styles.editor]}
          ref={_editor}
          onSelectionChange={handleSelectionChange}
          onTextChange={handleTextChange}
          onHtmlChange={async ({html}) =>
            await AsyncStorage.setItem(
              asyncStorageKeys.noteKey,
              JSON.stringify(html),
            )
          }
          quill={{
            placeholder: 'this is placeholder',
            modules: {
              toolbar: false,
            },
            theme: 'bubble',
          }}
          customJS={`
          var ListItem = Quill.import('formats/list/item');

          class PlainListItem extends ListItem {
            formatAt(index, length, name, value) {
              if (name === 'list') {
                // Allow changing or removing list format
                super.formatAt(name, value);
              }
              // Otherwise ignore
            }
          }
          
          Quill.register(PlainListItem, true);
            
          `}
          defaultFontFamily={customFonts[0].name}
          customFonts={customFonts}
          initialHtml={html}
        />
      )}

      <QuillToolbar
        editor={_editor}
        theme={{
          background: Colors.black27,
          color: Colors.white,
          overlay: Colors.blackOpacity,
          size: 30,
        }}
        styles={{
          toolbar: {
            provider: provided => ({
              ...provided,
              borderTopWidth: 0,
            }),
            root: provided => ({
              ...provided,
              backgroundColor: Colors.black27,
            }),
          },
        }}
        options={[
          {font: ['', customFonts[1].name]},

          {
            color: [],
          },
          {background: []},
          {size: ['small', false, 'large', 'huge']},
          'clean',
        ]}
        borderCurve="circular"
      />
      <QuillToolbar
        editor={_editor}
        theme={{
          background: Colors.black27,
          color: Colors.white,
          overlay: Colors.blackOpacity,
          size: 30,
        }}
        styles={{
          toolbar: {
            provider: provided => ({
              ...provided,
              borderTopWidth: 0,
            }),
            root: provided => ({
              ...provided,
              backgroundColor: Colors.black27,
            }),
          },
        }}
        options={[
          {align: []},
          'bold',
          'italic',
          'underline',
          'strike',
          {header: 1},
          {header: 2},
        ]}
        custom={{
          handler: customHandler,
          actions: ['image', 'clock'],
          icons: {
            clock: Images.htmlIcon,
          },
        }}
      />
      <QuillToolbar
        editor={_editor}
        theme={{
          background: Colors.black27,
          color: Colors.white,
          overlay: Colors.blackOpacity,
          size: 30,
        }}
        styles={{
          toolbar: {
            provider: provided => ({
              ...provided,
              borderTopWidth: 0,
            }),
            root: provided => ({
              ...provided,
              backgroundColor: Colors.black27,
            }),
          },
        }}
        options={[
          'image',
          'link',
          'blockquote',
          'checkbox',
          {list: 'ordered'},
          {list: 'bullet'},
          {indent: '-1'},
          {indent: '+1'},
          'code-block',
          'link',
        ]}
        custom={{
          handler: customHandler,
          actions: ['image', 'clock', 'checkbox'],
          icons: {
            clock: Images.htmlIcon,
            checkbox: Images.phizIcon,
          },
        }}
      />
    </ContainerView>
  );
}

var styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.white,
  },
  input: {
    marginHorizontal: Responsive.widthPercentageToDP('5'),
    marginVertical: Responsive.heightPercentageToDP('3'),
    backgroundColor: Colors.white,
  },
  textbox: {
    height: 40,
    paddingHorizontal: Responsive.widthPercentageToDP('5'),
  },
  editor: {
    flex: 1,
    padding: 0,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    margin: 3,
  },
});
