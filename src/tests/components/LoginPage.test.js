import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
});


test('should call startLogin on btn click', () => {
    const onLogin = jest.fn();
    const wrapper = shallow(<LoginPage  startLogin={onLogin}/>);
    wrapper.find('button').simulate('click');
    expect(onLogin).toHaveBeenCalled();
});