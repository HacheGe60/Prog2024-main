import './Button.css';
import { useState } from 'react';

interface Props {
	label: string;
	parentMethod: () => void;
}

const [count, setCount] = useState(0);

export const Button = ({ label, parentMethod }: Props) => {
	return (
		<button
			className='custom-button'
			onClick={parentMethod}
		>
			{label}
		</button>
	);
};
