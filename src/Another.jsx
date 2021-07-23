import React from 'react';
import _ from 'lodash';
function Another(){
    return <div>FOO<br/>
        {_.join(['This', 'was', 'written', 'using', 'lodash'], ' ')}
    </div>
}

export default Another;