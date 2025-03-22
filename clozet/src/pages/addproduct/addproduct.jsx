import React, { useState } from "react"; 
import './addproduct.css'
import { MdOutlineDashboard } from "react-icons/md";
import { Button, MenuItem, Select } from "@mui/material";
import axios from 'axios';



const AddProduct = ()=>{

    const [name,setName]=useState('');
    const [description,setDescription] = useState(''); 
    const [img, setImage] = useState('./images/defaultimg.png');
    
    
    const handleImagechange = (e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
    
    

     

const handleaddproduct = async (e) => {
    e.preventDefault();

    // Ensure you have the image (img) defined
    if (!img) {
        console.log('No image selected');
        return;
    }

    const formData = new FormData();
    formData.append('image', img); // Assuming 'img' is a file object
    formData.append('name',name);
    formData.append('description',description);
    try {
        const response = await axios.post('/api/addproduct', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Product added successfully', response);
    } catch (error) {
        console.error('Error uploading image or adding product:', error);
    }
};


    return(
        <>
       <div className="addproduct-section">
        <div className="addproduct-header">
            <form onSubmit={handleaddproduct}>
            <div className="addproduct-top">
                <div className="addproduct-heading">
                <div className="addproduct-icon">
                    <img src="./images/add-to-cart.png" alt=""/>
                </div>
                <h2>Add Products</h2>
                </div>
            </div>
            <div className="add-form-box">
                <div className="add-form-left">
                   <div className="main-product-form">
                   <div className="add-product-name">
                    <h3>Product Name</h3>
                  
                 </div>
                 <div className="product-input">
                    <input type="text" name="name"  onChange={(e)=>setName(e.target.value)}  placeholder="Enter Product Name"/>
                 </div>
                   </div>
                   <div className="main-product-form">
                     <div className="product-description">
                        <h3>Product Description</h3>
                     </div>
                     <div className="description-input">
                        <textarea type="text" onChange={(e)=>setDescription(e.target.value)} name="description"  >
                             
                        </textarea> 
                     </div>

                   </div>
                 

                </div>
                <div className="add-form-right">
                    <div className="add-product-image">
                    <div className="image-e-top">
                            <h4>Product Image Ratio (1:1)</h4>
                        </div>
                        <div className="image-show-box">
                            <div className="image-show">
                             {img && <img src={img} alt=""/>}
                            </div>
                        </div>
                        <div className="imgage-size">
                        <div className="image-size-heading">
                            <h4>Product Image Size Max 2 MB *</h4>
                        </div>
                        <div className="image-choose">
                            <input type="file" name="image" onChange={handleImagechange} />
                            
                        </div>
                        </div>
                    </div>
                    <div className="add-product-video">
                    <div className="video-e-top">
                            <h4>Product Video Ratio (1:1)</h4>
                        </div>
                        <div className="video-show-box">
                            <div className="video-show">

                            </div>
                        </div>
                        <div className="video-size">
                        <div className="video-size-heading">
                            <h4>Product Video Size Max 2 MB *</h4>
                        </div>
                        <div className="video-choose">
                            <input type="file"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-details">
                <div className="product-details-form">
                   <div className="p-details-top">
                    <div className="p-detail-heading">
                       <div className="p-detail-icon">
                        <MdOutlineDashboard/>
                       </div>
                       <h3>Product Details</h3>
                    </div>
                   </div>
                   <div className="p-detail-main-form">
                    <div className="part01">
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Category</h3>
                        </div>
                        <div className="p-d-input">
                            <Select className="s">
                                <MenuItem>Men</MenuItem>
                                <MenuItem>Women</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Sub-Category</h3>
                        </div>
                        <div className="p-d-input">
                              <input type="text" placeholder=" Ex..T-shirt" />
                        </div>
                    </div>
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Brand Name</h3>
                        </div>
                        <div className="p-d-input">
                           <input type="text" placeholder="Brand name"/>
                        </div>
                    </div>
                   
                    </div>
                    <div className="part02">
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Selling Price</h3>
                        </div>
                        <div className="p-d-input">
                          <input type="number" placeholder=" $100"/>
                        </div>
                    </div>
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Offer/Discount</h3>
                        </div>
                        <div className="p-d-input">
                           <input type="number" placeholder=" Ex..30% "/>
                        </div>
                    </div>
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Discount Price</h3>
                        </div>
                        <div className="p-d-input">
                           <input type="number" placeholder=" Ex.. $ 70 "/>
                        </div>
                    </div>
                   
                   
                    </div>
                    <div className="part03">
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Product Variations</h3>
                        </div>
                        <div className="size-color">
                           <input type="number" placeholder=" Size "/>
                           <input type="text" placeholder="Color"/>
                        </div>
                    </div>
                    
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>Tags and SEO keywords</h3>
                        </div>
                        <div className="p-d-input">
                           <input type="number" placeholder=" tags and SEO keywords"/>
                        </div>
                    </div>
                   
                    <div className="p-detail-part">
                        <div className="p-d-part-top">
                            <h3>SKU</h3>
                        </div>
                        <div className="p-d-input">
                           <input type="" placeholder="SKU"/>
                        </div>
                    </div>
                    </div>
                    <div className="part04">
                        <div className="stock-alert">
                    <div className="p-d-part-top">
                            <h3>Out-of-Stock</h3>
                        </div>
                        <div className="p-d-input">
                           <input type="checkbox" />
                        </div>
                        </div>
                        <div className="s-r-btn-box">
                            <Button  type="submit" className="s-bt" >Submit</Button>
                            <Button className="r-bt">Reset</Button>
                        </div>
                    </div>
                   </div>
                </div>
                
            </div>
            </form>
        </div>
       </div>
        </>
    )
}
export default AddProduct;