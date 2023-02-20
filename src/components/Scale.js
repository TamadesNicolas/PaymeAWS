import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Children, cloneElement } from 'react';
import { Dimensions } from 'react-native';
import Image from './scalable-image';

export const ScaleImage = ({ factor, children }) => {
  return Children.map(children, child => {
    return (
      <Image {...child.props} width={Dimensions.get('window').width * factor} />
    );
  });
};