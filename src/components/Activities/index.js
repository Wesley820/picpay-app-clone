import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';
import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@maateussilva</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <Username>Wesley Oliveira</Username>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 35,40</Value>
            <Divider />
            <Feather name="lock" color="#fff" size={14} />
            <Date>há 1 hora</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={15}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={15} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
