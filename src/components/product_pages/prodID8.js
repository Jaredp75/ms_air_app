import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';



class prodID8 extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {

    fetch('https://www.msaironline.com/qa1/api/product.php?id=8')
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.product.map((pic) => {
        return(

          <div>
            <div className="content-area-container">
              <div className="content-area-container2">
                <div id="individual_product_page">
                  <div className="individual-product">

                    <div className="individual_product_listing">
                      <div className="individual_product_entry">
                        {pic.product}
                      </div>
                      <div id="product-image">
                        <img src={pic.icon} alt="Quick Connect 500 Vacuum Wall Outlet" />
                        <h5>Catalog Number:<br />{pic.prodSku}</h5>
                      </div>


                    <div className="individual-product-details">
                      <div className="product-title">
                        <h2 className="individual-product-title">{pic.prodName}</h2>
                      </div>
                        <h4 className="product-brand-title">{pic.brandName}</h4>
                        <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.msrp}</h4>
                        <h4 className="individual-product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h4>
                        <h3 className="individual-product-actual-price"><strong>${pic.prodPrice}</strong></h3>
                        <br />
                        <br />
                      <div className="individual-product-description">
                        <ul>
                          <li><strong>Gas Type</strong>: Vacuum</li>
                          <li><strong>Item Type</strong>: Wall Outlet</li>
                          <li><strong>Series</strong>: Chemetron 500</li>
                          <li><strong>Style</strong>: Quick Connect</li>
                          <br />
                          <li>{pic.prodDesc}</li>
                          <br />
                          <li>{pic.prodLongDesc}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>







        </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Quantity:
              <input type="number" className="quantityBox" />
            </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

        <div id="replacement_items_section">
        <h4 className="replacement_items_header">Related Items</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/11_144x85.jpg" alt="Quick Connect 500 Medical Air Wall Outlet"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="../product_pages/prodID8">Quick Connect 500 Medical Air Wall Outlet</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/47_144x85.jpg" alt="Quick Connect 500 Vacuum Bottle Slide Assembly"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="../product_pages/prodID8">Quick Connect 500 Vacuum Bottle Slide Assembly</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/283_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Completion Kit"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Completion Kit</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/284_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Rough In Kit - Vacuum"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Rough In Kit - Vacuum</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/294_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Wall Outlet w/ New Style Cover Plate"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Wall Outlet w/ New Style Cover Plate</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>
    </div>


      <div className="replacement_parts_section">
        <h1 className="replacement_parts_header">Replacement Parts</h1>
      <div className="replacement_parts_image">
        <img src="https://www.msaironline.com/images/assembly/QuickConnect_DISS_Replacement_Parts.jpg" alt="Quick Connect"></img>
      </div>

      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/18_144x85.jpg" alt="Secondary Check Kit (6 each)"></img>
        </div>

          <h4 className="replacement_parts_name">Secondary Check Kit (6 each)</h4>
          <h4 className="replacement_parts_price"><strong>Price</strong>: $18.90</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
              <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/15_144x85.jpg" alt="Housing base O-ring (12 each)"></img>
        </div>

          <h4 className="replacement_parts_name">Housing base O-ring (12 each)</h4>
          <h4 className="replacement_parts_price"><strong>Price</strong>: $9.45</h4>
          <div className="replacement-parts-quantity-input-group">
            <form action="/action_page.php">
              <strong>Quantity</strong>:
                <input type="number" className="quantityBox" />
            </form>
          </div>

          <div className="replacement-parts-add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </span>


        <span className="replacement_parts_detail">
          <div className="replacement_parts_thumbnail">
            <img src="https://www.msaironline.com/images/prodImage/16_144x85.jpg" alt="Quick Connect Poppet 500 Series"></img>
          </div>

            <h4 className="replacement_parts_name">Quick Connect Poppet 500 Series</h4>
            <h4 className="replacement_parts_price"><strong>Price</strong>: $16.07</h4>
          <div className="replacement-parts-quantity-input-group">
            <form action="/action_page.php">
              <strong>Quantity</strong>:
                <input type="number" className="quantityBox" />
            </form>
          </div>

          <div className="replacement-parts-add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </span>


        <span className="replacement_parts_detail">
          <div className="replacement_parts_thumbnail">
            <img src="https://www.msaironline.com/images/prodImage/17_144x85.jpg" alt="Poppet O-ring Kit (12 each) - Quick Connect 500"></img>
          </div>

            <h4 className="replacement_parts_name">Poppet O-ring Kit (12 each) - Quick Connect 500</h4>
            <h4 className="replacement_parts_price"><strong>Price</strong>: $12.29</h4>
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>


          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src="https://www.msaironline.com/images/prodImage/20_144x85.jpg" alt="Valve body with poppet-vacuum"></img>
            </div>

              <h4 className="replacement_parts_name">Valve body with poppet-vacuum</h4>
              <h4 className="replacement_parts_price"><strong>Price</strong>: $41.58</h4>
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>

          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src="https://www.msaironline.com/images/prodImage/22_144x85.jpg" alt="Valve body O-ring kit (12 each)g"></img>
            </div>

              <h4 className="replacement_parts_name">Valve body O-ring kit (12 each)</h4>
              <h4 className="replacement_parts_price"><strong>Price</strong>: $12.29</h4>
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>

          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src="https://www.msaironline.com/images/prodImage/26_144x85.jpg" alt="Vacuum face plate assembly"></img>
            </div>

              <h4 className="replacement_parts_name">Vacuum face plate assembly</h4>
              <h4 className="replacement_parts_price"><strong>Price</strong>: $37.80</h4>
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>


          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src="https://www.msaironline.com/images/prodImage/34_144x85.jpg" alt="Face Plate Springs (12 per pack)"></img>
            </div>

              <h4 className="replacement_parts_name">Face Plate Springs (12 per pack)</h4>
              <h4 className="replacement_parts_price"><strong>Price</strong>: $15.12</h4>
              <div className="replacement-parts-quantity-input-group">
                <form action="/action_page.php">
                  <strong>Quantity</strong>:
                    <input type="number" className="quantityBox" />
                  </form>
                </div>

                <div className="replacement-parts-add-to-cart">
                  <input type="submit" value="Add To Cart" />
                </div>
              </span>


              <span className="replacement_parts_detail">
                <div className="replacement_parts_thumbnail">
                  <img src="https://www.msaironline.com/images/prodImage/35_144x85.jpg" alt="Face plate mounting screw kit (48 each)"></img>
                </div>

                  <h4 className="replacement_parts_name">Face plate mounting screw kit (48 each)</h4>
                  <h4 className="replacement_parts_price"><strong>Price</strong>: $21.73</h4>
                  <div className="replacement-parts-quantity-input-group">
                    <form action="/action_page.php">
                      <strong>Quantity</strong>:
                        <input type="number" className="quantityBox" />
                    </form>
                  </div>

                  <div className="replacement-parts-add-to-cart">
                    <input type="submit" value="Add To Cart" />
                  </div>
                </span>


                <span className="replacement_parts_detail">
                  <div className="replacement_parts_thumbnail">
                    <img src="https://www.msaironline.com/images/prodImage/36_144x85.jpg" alt="Vacuum Spring Kit (6 each)"></img>
                  </div>

                    <h4 className="replacement_parts_name">Vacuum Spring Kit (6 each)</h4>
                    <h4 className="replacement_parts_price"><strong>Price</strong>: $19.84</h4>
                    <div className="replacement-parts-quantity-input-group">
                      <form action="/action_page.php">
                        <strong>Quantity</strong>:
                          <input type="number" className="quantityBox" />
                      </form>
                    </div>

                    <div className="replacement-parts-add-to-cart">
                      <input type="submit" value="Add To Cart" />
                    </div>
                  </span>


                  <span className="replacement_parts_detail">
                    <div className="replacement_parts_thumbnail">
                      <img src="https://www.msaironline.com/images/prodImage/37_144x85.jpg" alt="Test plug kit (12 each)"></img>
                    </div>

                      <h4 className="replacement_parts_name">Test plug kit (12 each)</h4>
                      <h4 className="replacement_parts_price"><strong>Price</strong>: $14.18</h4>
                    <div className="replacement-parts-quantity-input-group">
                      <form action="/action_page.php">
                      <strong>Quantity</strong>:
                        <input type="number" className="quantityBox" />
                      </form>
                    </div>

                    <div className="replacement-parts-add-to-cart">
                      <input type="submit" value="Add To Cart" />
                    </div>
                  </span>


                  <span className="replacement_parts_detail">
                    <div className="replacement_parts_thumbnail">
                      <img src="https://www.msaironline.com/images/prodImage/51_144x85.jpg" alt="Back Box Mounting Screws & Fastner Kit (24 each)"></img>
                    </div>

                      <h4 className="replacement_parts_name">Back Box Mounting Screws & Fastner Kit (24 each)</h4>
                      <h4 className="replacement_parts_price"><strong>Price</strong>: $11.34</h4>
                    <div className="replacement-parts-quantity-input-group">
                      <form action="/action_page.php">
                        <strong>Quantity</strong>:
                          <input type="number" className="quantityBox" />
                      </form>
                    </div>

                    <div className="replacement-parts-add-to-cart">
                      <input type="submit" value="Add To Cart" />
                    </div>
                  </span>









</div>












        <div className="FooterLinks1">
          <HelpAndCurrency />
        </div>

        <div className="FooterLinks2">
          <AboutLinks />
        </div>
      </div>


      </div>
      <div className="about-footer">
        <div className="terms">
          <p><a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
        </div>

        <div className="copyright">
          <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
        </div>

      </div>





    </div>




        )
      })
      console.log("state", this.state.products);
      this.setState({products: products});
    })
  }



  render() {
    return (

      <div className="container2">
        <div className="container1">
          {this.state.products}
        </div>
      </div>
    )
  }





}



export default prodID8;
