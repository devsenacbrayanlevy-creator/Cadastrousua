const http = require("node:http");
const sqlite3 = require("sqlite3").verbose();
const fs = require("node:fs");

const banco = new sqlite3.Database("./data/Banco-de-dados.db");

const inserir = banco.prepare(
    "INSERT INTO tb_usuarios (nome, email, telefone) VALUES (?, ?, ?)"
);

const pagina = fs.readFileSync("../frontend/index.html");

http.createServer(async (req, res) => {

    if (req.method === "GET" && req.url === "/") {
        return res
            .writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            .end(pagina);
    }

    if (req.method === "GET" && req.url === "/style.css") {
        const estilo = fs.readFileSync("../frontend/style.css");

        return res
            .writeHead(200, { "Content-Type": "text/css; charset=utf-8" })
            .end(estilo);
    }

    if (req.method === "GET" && req.url === "/api/usuarios") {
        banco.all(
            "SELECT nome, email, telefone FROM tb_usuarios",
            [],
            (erro, usuarios) => {
                if (erro) {
                    return res
                        .writeHead(500, { "Content-Type": "application/json" })
                        .end(JSON.stringify({ erro: "Erro ao buscar usuários" }));
                }

                return res
                    .writeHead(200, { "Content-Type": "application/json" })
                    .end(JSON.stringify(usuarios));
            }
        );

        return;
    }

    if (req.method === "POST" && req.url === "/api/usuarios") {
        try {
            const partes = [];

            for await (const parte of req) partes.push(parte);

            const { nome, email, telefone = '' } =
                JSON.parse(Buffer.concat(partes).toString('utf-8'));

            inserir.run(nome, email, telefone);

            return res.writeHead(201).end();

        } catch {
            return res.writeHead(500).end();
        }
    }

    res.writeHead(404).end("");

}).listen(3000);