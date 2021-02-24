import React from 'react';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';


describe("CourseList.test.js", () => {
  it('Correct component rendering', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
});
