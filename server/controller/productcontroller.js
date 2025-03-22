import addproductModle from "../models/addproduct.js";


const addproduct = async (req, res) => {
    const {name,description}  = req.body;
    console.log("req is ", req );
    console.log("==================================================");
    console.log(req.file)
    const { filename,path } = req.file;
    
    
    

   

    console.log({name, description },filename,path)

    if (!name) {
        return res.status(400).json({ success: false, message: "Missing Details" });
    }
    
    try {
        const newProduct = new addproductModle({ name, description, filename,path });
        await newProduct.save();
        res.status(200).json({ success: true, message: 'Product added successfully', data: newProduct });
    } catch (error) {
        console.error("Error while adding product:", error.message);
        res.status(500).json({ success: false, message: 'Something went wrong', error: error.message });
    }
    
}
const getproducts = async (req, res) => {
    try {
        const products = await addproductModle.find();  // Fetch all products from the database
        console.log('Products fetched successfully:', products);
        res.status(200).json(products);  // Send the data as a response
    } catch (err) {
        console.log('Error fetching products:', err);
        res.status(500).json({ message: 'Error fetching products' });  // Send an error response
    }
}

export { addproduct,getproducts };