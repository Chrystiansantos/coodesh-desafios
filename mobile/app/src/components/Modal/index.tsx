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
            <PhotoUser uri={user.photo} />
          </BoxPhoto>
          <CloseModal>
            <Button onPress={() => changeStatusModal(false)}>
              <MaterialIcons name="close" size={30} />
            </Button>
          </CloseModal>
          <Header>
            <Title>{user.name}</Title>
            <NationalitySexBox>
              <Nationality>{user.nationality}</Nationality>
              {/* <FontAwesome name="female" size={24} color="black" /> */}
              <FontAwesome name={user.sex} size={24} color="black" />
            </NationalitySexBox>
          </Header>
          <BoxContent>
            <MaterialIcons name="email" size={30} color="black" />
            <TextBoxContent>{user.email}</TextBoxContent>
          </BoxContent>
          <BoxContent>
            <Entypo name="address" size={24} color="black" />
            <TextBoxContent>{user.address}</TextBoxContent>
          </BoxContent>
          <BoxContent>
            <MaterialIcons name={iconPhone} size={30} color="black" />
            <TextBoxContent>{user.phone}</TextBoxContent>
          </BoxContent>
          <BoxContent>
            <FontAwesome name="calendar" size={30} color="black" />
            <TextBoxContent>{user.birthDate}</TextBoxContent>
          </BoxContent>
        </Content>
      </Container>
    </Modal>
  );
}
