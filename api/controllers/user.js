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

export const updateUser = (req, res) => {
    const query = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_de_nascimento` = ? WHERE id = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_de_nascimento
    ];

    db.query(query, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};


export const deleteUser = (request, response) => {
    const query = "DELETE FROM usuarios WHERE id = ?";

    db.query(query, [request.params.id], (err) => {
        if (err) return response.json(err);
        
        return response.status(200).json("Usuário deletado com sucesso.");
    });
};