import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import InputField from '../../components/input-field/InputFieldComponent';
import ResponseServer from '../../components/response-server/ResponseServerComponent';
import { setNewText, setInputText } from '../../actions/TextAction';
import { config } from '../../config';

class HomeContainer extends Component {

    /**
     * Método para hacer el request al API
     * y setear el valor del input al store de Redux
     */
    handleSetNewText = async () => {
        try {
            let data = {
                text: this.props.inputField
            };
            let response = await axios.post(config.baseApiUrl + 'text', data);
            this.props.setNewText(response.data.text);
            this.props.setInputText('');
        } catch(error) {
            if(error) {
                this.props.setNewText(error.response.data.msg);
                this.props.setInputText('');
            }
        }
        //this.props.setNewText(this.props.inputField);
    }

    /**
     * Método para setear lo que escribe el usuario
     * en el input del formulario
     * @param value Valor introducido en el input
     */
    onChangeText = (value) => {
        this.props.setInputText(value);
    }

    render() {
        return (
            <Fragment >
                <InputField 
                    textButton={"Enviar texto"}
                    placeholder={"Introducir texto"}
                    handleSetNewText={this.handleSetNewText}
                    onChangeText={this.onChangeText}
                    responseServer={this.props.responseServer}
                    inputField={this.props.inputField}
                />
                <ResponseServer text={this.props.responseServer}/>
            </Fragment>
        )
    }
}

// Validando action a que sea requerida
HomeContainer.propTypes = {
    setNewText: PropTypes.func.isRequired,
    setInputText: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        inputField: state.inputField,
        responseServer: state.responseServer
    }
}

const mapDispatchToProps = dispatch => ({
    setNewText: value => dispatch(setNewText(value)),
    setInputText: value => dispatch(setInputText(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);