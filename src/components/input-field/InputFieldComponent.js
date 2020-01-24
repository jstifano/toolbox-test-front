import React from 'react';

const InputField = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 offset-3">
                    {/* Entrada de texto con botón */}
                    <div className="input-group mt-4 w-50">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder={props.placeholder} 
                            onChange={event => props.onChangeText(event.target.value)}
                            value={props.inputField}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-primary" 
                                type="button" 
                                id="button-addon2"
                                onClick={() => props.handleSetNewText()}
                            >
                                {props.textButton}
                            </button>
                        </div>
                    </div>
                    {/* Entrada de texto con botón */}
                </div>
            </div>
        </div>
    )
}

export default InputField;