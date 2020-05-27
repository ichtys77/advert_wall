import React from 'react';
import { shallow } from 'enzyme';
import { AnnouncementComponent } from './Announcement';

describe('Component Announcement', () => {
  it('should render without crashing', () => {
    const component = shallow(<AnnouncementComponent />);
    expect(component).toBeTruthy();
  });
});
