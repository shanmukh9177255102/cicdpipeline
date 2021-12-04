import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { mount, shallow } from 'enzyme'

describe('operations testing', () => {
    
    let wrapper, mounted;

    beforeEach(()=>{
        wrapper = mount(<App/>)
       // wrapper = shallow(<App/>)
    })

    test('5 + 3 === 8',()=>{
       wrapper.find('#a').simulate('change', { target: { name: 'a', value: 5 }})
       wrapper.find('#b').simulate('change', { target: { name: 'b', value: 3 }})
       wrapper.find('#o0').simulate('click')
       wrapper.find('#calculate').simulate('click')
       expect(wrapper.find('#result').text()).toBe('Result:8')
    })
    test('5 - 3 === 2',()=>{
        wrapper.find('#a').simulate('change', { target: { name: 'a', value: 5 }})
       wrapper.find('#b').simulate('change', { target: { name: 'b', value: 3 }})
       wrapper.find('#o1').simulate('click')
       wrapper.find('#calculate').simulate('click')
       expect(wrapper.find('#result').text()).toBe('Result:2')
    })
    test('5 * 3 === 15',()=>{
        wrapper.find('#a').simulate('change', { target: { name: 'a', value: 5 }})
       wrapper.find('#b').simulate('change', { target: { name: 'b', value: 3 }})
       wrapper.find('#o2').simulate('click')
       wrapper.find('#calculate').simulate('click')
       expect(wrapper.find('#result').text()).toBe('Result:15')
        
    })
    test('5 % 3 === 1',()=>{
        wrapper.find('#a').simulate('change', { target: { name: 'a', value: 5 }})
       wrapper.find('#b').simulate('change', { target: { name: 'b', value: 3 }})
       wrapper.find('#o3').simulate('click')
       wrapper.find('#calculate').simulate('click')
       expect(wrapper.find('#result').text()).toBe('Result:0')
    })

})