import React, {useState} from 'react';

const Index = () => {
	const [escrito, setEscrito] = useState('asdsad');

    return (
        <div>
            <div>{ escrito }</div>
            <input type="text" value={escrito} onChange={evento => setEscrito(evento.target.value)} />
        </div>
    );
}

export default Index;
