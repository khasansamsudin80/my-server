exports.createProduct = (req, res, next) => {
	res.json(
		{
			message: "Create product success"
			data: {
				id: 1,
				name: "Roti Gandum", 
				price: 3000
			}
		}
	);
	next();
};

exports.getAllProducts = (req, res, next) => {
	res.json(
		{
			message: "Get all products success"
			data: {
				id: 1,
				name: "Roti Gandum", 
				price: 3000
			}
		}
	);
	next();
};