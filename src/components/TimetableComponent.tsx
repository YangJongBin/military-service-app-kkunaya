import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from 'victory-native';

interface Props {
    
}


const TimetableComponent = (props: Props) => {
  // TODO: Timetable data
  const data = [
    { x: '1', y: 35 },
    { x: '2', y: 40 },
    { x: '3', y: 55 }
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.card , {flex: 1}]}>
        <VictoryPie
          height={300}
          events={[{
            target: 'data',
            eventHandlers: {
              onPressIn: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({ style }) => {
                      return style.fill === '#c43a31' ? null : { style: { fill: '#c43a31' } };
                    }
                  }, {
                    target: 'labels',
                    mutation: ({ text }) => {
                      return text === 'clicked' ? null : { text: 'clicked' };
                    }
                  }
                ];
              },
            }
          }]}
          data={data}
        />
      </View>
    </View>
  );
};

export default TimetableComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexDirectionRow:{
    flexDirection:'row', 
    flex: 2
  },
  card:{ 
    backgroundColor: 'white',
    borderRadius: 15,
    margin:5,
    shadowColor:'black',
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    }
  }
});
