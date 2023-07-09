import { useEffect, useState } from "react";
import { getProjects } from "../../services/Services";
import { Button, Text, TouchableOpacity, View } from "react-native";

type Project = {
  id: string;
  name: string;
};

const ProjectScreen = ({ navigation }:any) => {
  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  const [projects, setProjects] = useState([]);

  return (
    <View>
      <Text style={{ fontSize: 32, marginBottom: 16 }}>Todo-List App</Text>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Projects</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {projects.map((project: any) => (
          <TouchableOpacity
            key={project.id}
            style={{
              marginLeft: 8,
              padding: 8,
              backgroundColor: 'blue',
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Task', { id: project.id })}
          >
            <Text style={{ color: 'white' }}>{project.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default ProjectScreen;
