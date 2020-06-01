import React from 'react';
import PropTypes from 'prop-types';

import { EntryBoxWrapper, Input } from '../css/components/entrybox';

const EntryBox = ({ onEntryChange, onEntrySave, searchString }) => {
    return (
        <EntryBoxWrapper>
            <Input
                value={searchString}
                placeholder="Type and Enter to Search"
                onEntryChange={onEntryChange}
                onEntrySave={onEntrySave} />
        </EntryBoxWrapper>
    );
};

EntryBox.propTypes = {
    topic: PropTypes.string,
    onEntryChange: PropTypes.func.isRequired,
    onEntrySave: PropTypes.func.isRequired,
};

EntryBox.defaultProps = {
    topic: '',
};

export default EntryBox;
