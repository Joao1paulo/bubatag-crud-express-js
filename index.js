import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/index", (req,res) =>{
    res.render("index")
})

app.listen(8086, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor, erro: " + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});