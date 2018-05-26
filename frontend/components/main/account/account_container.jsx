import React from "react";
import { connect } from "react-redux";
import AccountMain from "./account";

const mapStateToProps = ({ session: { currentUser } }) => ({
	currentUser,
});

export default connect(mapStateToProps)(AccountMain);
