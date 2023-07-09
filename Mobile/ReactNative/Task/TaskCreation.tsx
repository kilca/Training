import { useState } from "react";
import { createTask } from "../services/Services";
import { View, TextInput, Button } from 'react-native';

interface TaskCreationProps {
    refreshTask: ()=>void;
    projectId: string;
}

const TaskCreation = ({ refreshTask, projectId }:TaskCreationProps) => {
  const [name, setName] = useState('');

  const handleInputChange = (value:any) => {
    setName(value);
  };

  const callCreate = () => {
    createTask(name, projectId).finally(() => {
      refreshTask();
    });
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        style={{
          flex: 1,
          marginLeft: 8,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 8,
          padding: 8,
        }}
        value={name}
        onChangeText={handleInputChange}
      />
      <Button
        title="(+)"
        onPress={callCreate}
        color="blue"
      />
    </View>
  );
};

export default TaskCreation;