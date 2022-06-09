import React from 'react'
import './setupTests';
import { mount } from 'enzyme';
import ShareCom from './MocksComponents/ShareComponent'
import InstallCom from './MocksComponents/InstallComponent';

//mocker le composant UserComponent
//mocker le composant InstallComponent
const mockUserComponent = jest.fn();
jest.mock("./MocksComponents/UserComponent", () => (props) => {
  mockUserComponent(props);
  return <mock-user-component />;
});

const mockInstallComponent = jest.fn();
jest.mock("./MocksComponents/InstallComponent", () => (props) => {
    mockInstallComponent(props);
    return <mock-install-component />;
  });



describe('ShareCom', () => {
    it('should return correct component', () => {   
        //mount  ShareCom 
        mount(<ShareCom/>);

        //test
        expect(mockInstallComponent).toHaveBeenCalledWith({para1: 'title1'});
        expect(mockUserComponent).toHaveBeenCalledWith({para2: 'title2'});
    })
});
