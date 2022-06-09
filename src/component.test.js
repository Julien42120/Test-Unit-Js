import React from 'react';
import './setupTests';
import renderer from 'react-test-renderer';
import { render, shallow } from 'enzyme';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

class Link extends React.Component {
    constructor(props) {
        super(props);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.state = {
            class: STATUS.NORMAL,
        };
    }
    
    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }
    
    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
    }
    
    render() {
        return (
            <a
            className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
                >
                {this.props.children}
            </a>
        );
    }
}
<Link page="http://www.facebook.com">Facebook</Link>;

test('component is not crashing', () => {
    const component = shallow(<Link/>);
    expect(component).not.toEqual(new Error());
  //utiliser simplement la fonction shallow pour constater que le composant ne créé pas d'erreur lorsqu'il est instancié
});

it('renders correctly', () => {
    const test = renderer.create(<Link/>);
    let json = test.toJSON();
    expect(json).toMatchSnapshot();
	//utiliser la méthode renderer afin de créer un snapshot
});


test('can see title', () => {
    const wrapper = shallow(
        <Link 
            page="http://www.facebook.com">Facebook
        </Link>);
    expect(wrapper.text()).toEqual('Facebook');
    expect(wrapper.find('a').prop('href')).toEqual("http://www.facebook.com");
  //utilisez les fonctions de parcours find, text, etc ... de enzyme afin de valider le titre du lien et son attribut href  
});

test('validate props', () => {
    const wrapper = shallow(
        <Link 
            page="http://www.facebook.com" 
            children="Facebook"
        />);
        expect(wrapper.find('a').get(0).props.href).toEqual("http://www.facebook.com");
        expect(wrapper.text()).toEqual('Facebook');
  //utilisez ici une nouvelle fois le shallow rendering afin de constater la valeur des props children et page
});