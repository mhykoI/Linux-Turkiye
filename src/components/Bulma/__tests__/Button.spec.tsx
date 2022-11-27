import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('<Button />', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Button
          element="a"
          anchor={{ href: 'https://linux.org' }}
          title="Deepin Türkiye"
          rounded
          size="medium"
          color="success"
        >
          linux.org
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
