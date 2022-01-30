import React from "react";
import { render } from '@testing-library/react'

import ClearTodo from "./ClearTodo";

const testProps = {
    buttonText: 'pear'
}

test('Testing whether the ClearTodo component is able to render correctly and works', ()=>{
    const { getByTestId } = render(<ClearTodo />);
    const actual = getByTestId("cleartodo-div");
    expect(actual).toBeInTheDocument();
});

test('Test that the inner text of the buttom element is the value of the button', ()=>{
    const { getByTestId } = render(<ClearTodo {...testProps} />);
    const button = getByTestId('cleartodo-button');
    expect(button).toHaveTextContent('pear');
})
