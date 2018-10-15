import { connect } from 'react-redux';
import NavButtons from './nav_buttons';

const mapStateToProps = ({ session: { currentUser } }) => ({
	currentUser,
});

export default connect(mapStateToProps)(NavButtons);
