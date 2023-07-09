import React, { useState } from "react";
import { deleteTask, updateTask } from "../services/Services";
import { Button, Text, TextInput, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface TaskProps {
  id:string;
  name:string;
  done:boolean;
  refreshTask: ()=>void;
}const Task = ({ id, name, done, refreshTask } : TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState(name ?? '');
  const [inputDone, setInputDone] = useState(done ?? false);

  const handleInputChange = (value : string) => {
    setInputName(value);
  };

  const handleCheckboxChange = (value : any) => {
    updateTask({ id: id, name: inputName, done: !inputDone })
      .finally(() => {
        refreshTask();
      });
    setInputDone((prev) => !prev);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    updateTask({ id: id, name: inputName, done: inputDone })
      .finally(() => {
        refreshTask();
      });
  };

  const callDelete = () => {
    deleteTask(id).finally(() => {
      refreshTask();
    });
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
      <BouncyCheckbox 
        size={25}
        isChecked={inputDone} onPress={handleCheckboxChange} />
      {isEditing ? (
        <TextInput
          style={{ marginLeft: 8, color: 'gray', flex: 1 }}
          value={inputName}
          onChangeText={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <Text
          style={{ marginLeft: 8, color: 'white' }}
          onPress={() => setIsEditing(true)}
        >
          {inputName}
        </Text>
      )}
      <Button
        title="(-)"
        onPress={callDelete}
        color="red"
      />
    </View>
  );
};
export default Task;