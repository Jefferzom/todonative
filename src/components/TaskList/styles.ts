import styled from 'styled-components/native';

export const TaskContainer:any = styled.View`
  background: #EBEBEB;
  height: 100%;

  max-width: 100%;

  padding-left: 12px;
  padding-right: 12px;
  margin-top: 2px;
  padding-top: 2px;

`

export const TaskGroup:any = styled.View`
  elevation: 10;

  background: #FFFFFF;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  padding: 15px 12px;
  margin-top: -35;
`

export const TaskBox:any = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TaskTitle:any = styled.Text`
  font-size: 34px;
  font-family: 'Poppins-Regular';

  color: #121214;
`

export const TaskButton:any = styled.TouchableOpacity`
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  background: #42f5c5;
  padding: 6px;
  elevation: 5px;
`

export const TaskInput:any = styled.TextInput`
  font-size: 25px;
  font-family: 'Poppins-Regular';
  width: 85%;

  background: #EBEBEB;
  color: #1C1C29;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const TaskBody:any = styled.View`

`