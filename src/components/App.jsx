//componente de prueba: aquí enviamos el valor inicial al componente form donde está la mayor parte de la logica

import React from "react";
import Form from "./Form";

const App = () => {
    const onSubmit = (valores) =>{
        console.log(valores)
    }
    return (
        <Form initialState={{ text: "", email: "" }}
        onSubmit={onSubmit}>
            {({ valores, handleChange, handleSubmit }) => (
                <form
                onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={valores.text}
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="text"
                    />
                    <input
                        type="email"
                        value={valores.email}
                        placeholder="email"
                        onChange={handleChange}
                        name="email"
                    />
                    <button type="submit">Enviar</button>
                </form>
            )}
        </Form>
    );
};

export default App;
