const response = require("express");

const usuariosGet = (req, res = response) => {
  const query = req.query;

  res.json({
    msg: "get that",
    query,
  });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "post that",
    body,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put that",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch that",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete that",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
