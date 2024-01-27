import { Dashboard } from '@mui/icons-material';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Settings" component={FaChalkboardTeacher} />
      <Tab.Screen name="Settings" component={FaChalkboardTeacher} />
      <Tab.Screen name="Settings" component={FaChalkboardTeacher} />
      <Tab.Screen name="Settings" component={FaChalkboardTeacher} />
    </Tab.Navigator>
  );
}

export default Bottom;