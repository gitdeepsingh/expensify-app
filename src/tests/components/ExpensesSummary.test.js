import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={333} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={52452} />);
    expect(wrapper).toMatchSnapshot();
});
