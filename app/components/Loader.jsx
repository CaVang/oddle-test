import React from 'react';

import { LoaderStyle, LoaderInner, Bound1, Bound2, Bound3 } from '../css/components/loader';

function Loader() {
    return (
        <LoaderStyle>
            <LoaderInner>
                <Bound1 />
                <Bound2 />
                <Bound3 />
            </LoaderInner>
        </LoaderStyle>
    );
}

export default Loader;
