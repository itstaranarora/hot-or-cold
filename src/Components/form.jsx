import React from 'react';
import { TextField,Button } from '@material-ui/core';

const Form = ({ block, returnGuessToApp }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		if (!block) {
			const guess = e.target.elements.guess.value;
			e.target.elements.guess.value = "";
			returnGuessToApp(guess);
		}
	}

	return (
		<form style={{marginTop: "20px"}} onSubmit={onSubmit}>
			<TextField style={{ paddingBottom: '20px'}} fullWidth type="number" inputProps={{ min: '0', max: '100', step: '1' }} label="Enter your guess..." name="guess" required/>
			<Button fullWidth variant="contained" color="primary" type="submit">Guess</Button>
		</form>
	)
}

export default Form;