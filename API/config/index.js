module.exports = {
	secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "GSDFGAWE32R1R65FGHYUT32123DTHDFGHDFGKMJK98DSERV563CXDFTHN475JUHAN69DJ5LMJQ",
	api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
	loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000",
};