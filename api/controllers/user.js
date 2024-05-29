import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    }); 
};

export const addUser = (request, respose) => {
    const query = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_de_nascimento`)values(?)";

    const values = [
        request.body.nome,
        request.body.email,
        request.body.fone,
        request.body.data_de_nascimento,
    ];

    db.query(query, [values], (err) => {
        if (err) return respose.json(err);

        return respose.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (resquest, response) => {
    const query = "UPDATE usuarios SET ´nome´ = ?, `email` = ?, `fone` = ?, `data_de_nascimento` = ? WHERE `id` = ?";

    const values = [
        request.body.name,
        request.body.email,
        request.body.fone,
        request.body.data_de_nascimento,
    ];

    db.query(query, [...values, resquest.params.id], (err) => {
        if (err) return response.json(err);

        return respose.status(200).json("Usuário atualizado com sucesso");
    })
}