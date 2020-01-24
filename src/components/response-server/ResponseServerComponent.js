import React from 'react';

const ResponseServer = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 offset-3">
                    {'Respuesta del API: ' + props.text}
                </div>
            </div>
        </div>
    )
}

export default ResponseServer;