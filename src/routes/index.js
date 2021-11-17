const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
    res.render("index.html",{title: "Plataformas UC"});
});

router.get("/contact",(req, res) => {
    res.render("contact.html",{title: "Contacto"});
});

router.get("/faq",(req, res) => {
    res.render("faq.html",{title: "Preguntas Frecuentes"});
});

router.get("/ubbc",(req, res) => {
    res.render("ubbc.html",{title: "Bioindormática y Biología Computacional"});
});

router.get("/uev",(req, res) => {
    res.render("uev.html",{title: "Experimentación Vegetal"});
});

router.get("/uma",(req, res) => {
    res.render("uma.html",{title: "Microscopía Avanzada"});
});

router.get("/omics",(req, res) => {
    res.render("omics.html",{title: "Secuenciación y Tecnologías Ómicas"});
});

router.get("/ucf",(req, res) => {
    res.render("ucf.html",{title: "Citometría de Flujo"});
});

router.get("/servicios",(req, res) => {
    res.render("services.html",{title: "Servicios"});
});

router.get("/quienes_somos",(req, res) => {
    res.render("quienes_somos.html",{title: "Quienes somos"});
});

// redirigir a paginas desconocidas.
//router.get("*",(req, res) => {
//   res.render("404.html",{title: "No encontrado"});
//});

module.exports = router;