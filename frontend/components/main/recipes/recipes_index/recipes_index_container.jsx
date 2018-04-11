import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMeals } from '../../../../actions/meals_actions';
import RecipesIndex from './recipes_index';

const mapStateToProps = ({ entities: { meals } }, ownProps) => ({
	meals,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAllMeals: () => dispatch(fetchAllMeals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesIndex);
