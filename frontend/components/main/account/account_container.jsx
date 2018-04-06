import React from 'react';
import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = ({ session: { currentUser } }) => ({
	currentUser,
});

export default connect(mapStateToProps)(Account);
