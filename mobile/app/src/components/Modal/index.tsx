import React from 'react';
import { Modal, ModalProps, Platform } from 'react-native';
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { PhotoUser } from '../PhotoUser';

import {
  Container,
  Content,
  BoxPhoto,
  CloseModal,
  Button,
  Header,
  Title,
  Nationality,
  BoxContent,
  TextBoxContent,
  NationalitySexBox,
} from './styles';
import { IUser } from '../../dtos/IUserDTO';

interface IModalComponentsProps extends ModalProps {
  open: boolean;
  changeStatusModal: (close: boolean) => void;
  user: IUser;
}

const iconPhone = Platform.OS === 'ios' ? 'phone-iphone' : 'phone-android';

export function ModalComponent({
  open,
  changeStatusModal,
  user,
  ...rest
}: IModalComponentsProps) {
  /*
  address: string;
  */

  return (
    <Modal
      animationType="fade"
      visible={open}
      statusBarTranslucent
      transparent
      {...rest}
    >
      <Container>
        <Content>
          <BoxPhoto>
            <PhotoUser uri="https://avatars.githubusercontent.com/u/33062949?v=4" />
          </BoxPhoto>
          <CloseModal>
            <Button onPress={() => changeStatusModal(false)}>
              <MaterialIcons name="close" size={30} />
            </Button>
          </CloseModal>
          <Header>
            <Title>Chrystian Santos</Title>
            <NationalitySexBox>
              <Nationality>Brasileiro</Nationality>
              {/* <FontAwesome name="female" size={24} color="black" /> */}
              <FontAwesome name="male" size={24} color="black" />
            </NationalitySexBox>
          </Header>
          <BoxContent>
            <MaterialIcons name="email" size={30} color="black" />
            <TextBoxContent>Chrystian_Santos_Silva@hotmail.com</TextBoxContent>
          </BoxContent>
          <BoxContent>
            <Entypo name="address" size={24} color="black" />
            <TextBoxContent>Rua 27, numero 302 Iguatama - MG</TextBoxContent>
          </BoxContent>
          <BoxContent>
            <MaterialIcons name={iconPhone} size={30} color="black" />
            <TextBoxContent>(62) 9 8130-5602</TextBoxContent>
          </BoxContent>
          <BoxContent>
            <FontAwesome name="calendar" size={30} color="black" />
            <TextBoxContent>07/04/1998</TextBoxContent>
          </BoxContent>
        </Content>
      </Container>
    </Modal>
  );
}
