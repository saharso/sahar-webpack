import _ from 'lodash';
import React from 'react';
function Another(){
    return <div>FOO 
        {_.join(['I', 'am', 'here'], ' ')}
    </div>
}

export default Another;