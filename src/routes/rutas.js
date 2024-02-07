const express = require("express");
const router = express.Router();

const { getAllLibros, getLibroById, createLibro, updateLibro, deleteLibro} = require("../controller/libroController");



const { requiredScopes } = require("express-oauth2-jwt-bearer");


router.get("/", requiredScopes("read:libros"), getAllLibros);


router.get("/:id", requiredScopes("read:libros"), getLibroById);


router.post("/", requiredScopes("write:libros"), createLibro);


router.put("/:id", requiredScopes("write:libros"), updateLibro);


router.delete("/:id", requiredScopes("write:libros"), deleteLibro);

module.exports = router;