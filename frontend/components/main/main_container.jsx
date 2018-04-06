import React from 'react';
import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = ({ session: { currentUser } }) => ({
	currentUser,
});

export default connect(mapStateToProps)(Main);
