import React, { useState } from "react";
import "./index.sass";

function Index() {
	const [foo, setFoo] = useState("");

	return (
		<div className="renderizacao">
			<h1>Renderização condicional</h1>

			<div>
				<h3>Foo bar</h3>
				<input type="radio" name="foo" onClick={(e) => setFoo(e.target.value)} value="foo1" /> <span>foo 1</span>
				<input type="radio" name="foo" onClick={(e) => setFoo(e.target.value)} value="foo2" /> <span>foo 2</span>
				<input type="radio" name="foo" onClick={(e) => setFoo(e.target.value)} value="foo3" /> <span>foo 3</span>
				<input type="radio" name="foo" onClick={(e) => setFoo(e.target.value)} value="foo4" /> <span>foo 4</span>
				<input type="radio" name="foo" onClick={(e) => setFoo(e.target.value)} value="foo5" /> <span>foo 5</span>
			</div>

            <h2 className={foo}>{foo}</h2>
            
            <img src={foo === 'foo1' ? '/assets/images/lucas.jpg' : '/assets/images/lucass.png' } alt='foo' width='100px' />
            
		</div>
	);
}

export default Index;
