import React from 'react';
import _ from 'lodash';
function WithLodash(){
    return <div><h1>Loads with a library</h1><br/>
        {_.join(['This', 'was', 'written', 'using', 'lodash'], ' ')}
    </div>
}

export default WithLodash;