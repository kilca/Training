import { useState, useEffect } from "react";
import { getTasks } from "../../../services/Services";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import TaskCreation from "../../../Task/TaskCreation";
import Task from "../../../Task/Task";

const TaskScreen = ({ route, navigation }:any) => {
  const {id} = route.params;

  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (id && update) {
      getTasks(id)
        .then((data) => {
          setTasks(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setUpdate(false);
        });
    }
  }, [id, update]);

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 24, marginBottom: 8 }}>Todo-List App</Text>
      </View>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>My list</Text>
      <View>
        <TaskCreation refreshTask={() => setUpdate(true)} projectId={id} />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 2,
            marginBottom: 2,
          }}
        >
        {tasks.map((task:any) => (
          
          <Task
            key={task.id}
            id={task.id}
            done={task.done}
            name={task.name}
            refreshTask={() => setUpdate(true)}
          />
        ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TaskScreen;
