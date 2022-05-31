import React, {Component} from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {COLORS} from '../../themes/styles';

export default class Text extends Component {
  render() {
    const {
      color = COLORS.white,
      children,
      style,
      title,
      subTitle,
      textBlue,
    } = this.props;
    return (
      <RNText
        {...this.props}
        style={[
          style,
          title && styles.title,
          subTitle && styles.subTitle,
          textBlue && styles.textBlue,
          {color},
        ]}>
        {children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
  textBlue: {
    color: 'coral',
  },
  subTitle: {
    fontSize: 12,
    opacity: 0.55,
  },
});
