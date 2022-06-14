import './Checkout.scss';
import React from 'react';
  
const Checkout = (props) => {
  return (
    <>
	<div class="container maincartcheotpage">
		<div class="row">
			<div class="col-12">
				<div class="mainchekoutform-card">
					<form id="msform">
						<ul id="progressbar" class="prodrformcartchot-cov">
							<li class="formset-one active" id="account">
								<p>Your Shopping Cart</p>
							</li>
							<li class="formset-two" id="personal">
								<p>Shipping Address</p>
							</li>
							<li class="formset-three" id="payment">
								<p>Payment Methods</p>
							</li>
							{/* <!-- <li id="confirm"><strong>Finish</strong></li> --> */}
						</ul>

						<fieldset>
							<div class="cartcheckotpage-cov">
								
								<div class="cartcheckotpage-right">
									<div class="orderSummary-box">
										<div class="ordsumm-title">
											<h3>Order Summary</h3>
										</div>
										<div class="orderSumma-main1">
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Items 3 </p>
												</div>
												<div class="ordSummain-right">
													<p>$447.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Shipping Charges</p>
												</div>
												<div class="ordSummain-right">
													<p>$20.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Tax</p>
												</div>
												<div class="ordSummain-right">
													<p>$2.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Discount</p>
												</div>
												<div class="ordSummain-right">
													<p>$0.00</p>
												</div>
											</div>
										</div>
										<div class="sumertotal-cost">
											<div class="sumertotacost-left">
												<p>TOTAL COST</p>
											</div>
											<div class="sumertotacost-right">
												<p>$469.00</p>
											</div>
										</div>
										<div class="applydiscot-main">
											<h6>Apply Discount Code</h6>
											<div class="applydiscot-form">
												<input type="text" placeholder="Enter discount code" />
												<a href="javascript:void(0);">Apply</a>
											</div>
										</div>
									</div>
								</div>
								<div class="cartcheckotpage-left">
									<div class="cartcheckotpage-title">
										<h2>Your Shopping Cart</h2>
									</div>
									<div class="cartcheckotpage-carttbl">
										<table class="table">
											<thead>
											  <tr>
												<th scope="col">Product</th>
												<th scope="col">Price</th>
												<th scope="col">Quantity</th>
												<th scope="col"></th>
											  </tr>
											</thead>
											<tbody>
                        <tr>
                        <td class="prodeist-tbl">
                          <img src="images/product-img.png" alt="" />
                          <p>Rust High Neck Frill <br />
                          Smock Dress</p></td>
                        <td>$149.00</td>
                        <td class="carcpuntdata">
                          <div class="button-container carcpunt-inercot">
                            <button class="cart-qty-minus" type="button" value="-">-</button>
                            <input type="text" name="qty" min="0" class="qty form-control" value="0"/>
                            <button class="cart-qty-plus" type="button" value="+">+</button>
                          </div>	
                        </td>
                        <td class="catprod-remove">
                          <a href="javascript:void(0);"><i class='bx bx-x'></i></a>
                        </td>
                        </tr>
								 			</tbody>
										</table>
									</div>
								</div>
							</div>
							
							<br />
							<input type="button" name="next" class="next action-button nxtprvbtnsetmaincov1" value="Continue to checkout" />
							<div class="cotcoshop-albtncart">
								<a href="javascript:void(0);">Continue Shopping</a>
							</div>
						</fieldset>
						<fieldset>
							<div class="cartcheckotpage-cov">
								
								<div class="cartcheckotpage-right">
									<div class="orderSummary-box">
										<div class="ordsumm-title">
											<h3>Order Summary</h3>
										</div>
										<div class="ordsmrwithimgteprod_cov">
											<div class="ordsmrwithimgteprod_iner">
												<div class="ordsmrwithimgteprod_left">
													<img src="images/product-img.png" alt="" />
													<h5>Smock Dress</h5>
													<p>Qty - 1</p>
												</div>
												<div class="ordsmrwithimgteprod_right">
													<p>$149.00</p>
												</div>
											</div>
					 						<div class="seemorbtnlinkcovcrt">
												<a href="#">See More</a>
											</div>
										</div>
										<div class="orderSumma-main1">
											
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Shipping Charges</p>
												</div>
												<div class="ordSummain-right">
													<p>$20.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Tax</p>
												</div>
												<div class="ordSummain-right">
													<p>$2.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Discount</p>
												</div>
												<div class="ordSummain-right">
													<p>$0.00</p>
												</div>
											</div>
										</div>
										<div class="sumertotal-cost">
											<div class="sumertotacost-left">
												<p>TOTAL COST</p>
											</div>
											<div class="sumertotacost-right">
												<p>$469.00</p>
											</div>
										</div>
										<div class="applydiscot-main">
											<h6>Apply Discount Code</h6>
											<div class="applydiscot-form">
												<input type="text" placeholder="Enter discount code" />
												<a href="javascript:void(0);">Apply</a>
											</div>
										</div>
									</div>
								</div>
								<div class="cartcheckotpage-left">
									<div class="cartcheckotpage-title">
										<h2>Shipping Address</h2>
									</div>
									<div class="shipaddress-maincov" >
										<h6><a href="javascript:void(0);">Already have an account? Log in</a></h6>
										<div class="shipaddressformset">
											<div class="row">
												<div class="col-md-6">
													<div class="comsignupinset-inerform">
														<div class="form-group">
															<input type="text" class="form-control" id="" placeholder="Enter First name" />
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="comsignupinset-inerform">
														<div class="form-group">
															<input type="text" class="form-control" id="" placeholder="Enter Last name" />
														</div>
													</div>
												</div>
											</div>
											<div class="comsignupinset-inerform">
												<div class="form-group">
													<input type="text" class="form-control" id="" placeholder="Company (optional)" />
												</div>
											</div>
											<div class="comsignupinset-inerform">
												<div class="form-group">
													<input type="text" class="form-control" id="" placeholder="Apartment, Suite, etc, (optional)" />
												</div>
											</div>
											<div class="row">
												<div class="col-md-8">
													<div class="comsignupinset-inerform">
														<div class="form-group">
															<select class="js-example-basic-single" name="gender">
																<option value="">City</option>
																<option value="">City</option>
																<option value="">City</option>
															</select>
														</div>
													</div>
												</div>
												<div class="col-md-4">
													<div class="comsignupinset-inerform">
														<div class="form-group locationaddership">
															<i class='bx bxs-map'></i>
															<input type="text" class="form-control" id="" placeholder="Find Location" />
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-4">
													<div class="comsignupinset-inerform">
														<div class="form-group">
															<select class="js-example-basic-single" name="gender">
																<option value="">Select Country</option>
																<option value="">Select Country</option>
																<option value="">Select Country</option>
															</select>
														</div>
													</div>
												</div>
												<div class="col-md-4">
													<div class="comsignupinset-inerform">
														<div class="form-group">
															<select class="js-example-basic-single" name="gender">
																<option value="">Select State</option>
																<option value="">Select State</option>
																<option value="">Select State</option>
															</select>
														</div>
													</div>
												</div>
												<div class="col-md-4">
													<div class="comsignupinset-inerform">
														<div class="form-group">
															<input type="text" class="form-control" id="" placeholder="ZIP Code" />
														</div>
													</div>
												</div>
											</div>
											<div class="comsignupinset-inerform">
												<div class="form-group">
													<div class="sltmobileaninput">
														<input type="text" class="form-control" id="" placeholder="Enter Mobile No" />
														<select class="js-example-basic-single" name="gender">
															<option value="">+973</option>
															<option value="">+91</option>
															<option value="">+92</option>
															<option value="">+93</option>
														</select>
													</div>
												</div>
											</div>
											<div class="siginup-newlettbox">
												<div class="custom_checkbox">
													<label class="control control--checkbox">
													<p>Save this information for next time</p>
													<input type="checkbox" checked="checked" />
													<div class="control__indicator"></div>
													</label>
												</div>
											</div>

										</div>
									</div>

									<div class="shpadderandmethod" style="display: none;">
										<div class="shipadderparttwoset-cov">
											<div class="shipadderparttwoset-iner righadder-borderst">
												<h4>Contact</h4>
												<p>Street:  2586 West Street</p>
												<p>City:  Wyoming</p>
												<p>State/province/area:   Michigan</p>
												<p>Phone number  616-717-8179</p>
												<p>Zip code  49509</p>
											</div>
											<div class="shipadderparttwoset-iner">
												<h4>Ship to</h4>
												<p>Street:  2586 West Street</p>
												<p>City:  Wyoming</p>
												<p>State/province/area:   Michigan</p>
												<p>Phone number  616-717-8179</p>
												<p>Zip code  49509</p>
											</div>
										</div>
										<div class="shipmethoddata-main">
											<div class="shipmethoddata-cov">
												<h3>Shipping Method</h3>
											</div>
											<div class="bhdlistdatchboxall-main">
												<div class="bhdlistdatchboxall-left">
													<div class="custom_checkbox">
														<label class="control control--checkbox">
															<input type="checkbox" checked="checked" />
															<div class="control__indicator"></div>
														</label>
													</div>
												</div>
												<div class="bhdlistdatchboxall-mid">
													<p>BHD 1</p>
												</div>
												<div class="bhdlistdatchboxall-right">
													<p>Aramex</p>
												</div>
											</div>
											<div class="bhdlistdatchboxall-main">
												<div class="bhdlistdatchboxall-left">
													<div class="custom_checkbox">
														<label class="control control--checkbox">
															<input type="checkbox" checked="checked" />
															<div class="control__indicator"></div>
														</label>
													</div>
												</div>
												<div class="bhdlistdatchboxall-mid">
													<p>BHD 1</p>
												</div>
												<div class="bhdlistdatchboxall-right">
													<p>SMSA EXPRESS</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<input type="button" name="next" class="next action-button nxtprvbtnsetmaincov1" value="Continue to shipping" /> 
							{/* <!-- <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> --> */}

							<div class="cotcoshop-albtncart">
								<a href="javascript:void(0);">Return to cart</a>
							</div>
						</fieldset>
						<fieldset>
							<div class="cartcheckotpage-cov">
								
								<div class="cartcheckotpage-right">
									<div class="orderSummary-box">
										<div class="ordsumm-title">
											<h3>Order Summary</h3>
										</div>
										<div class="ordsmrwithimgteprod_cov">
											<div class="ordsmrwithimgteprod_iner">
												<div class="ordsmrwithimgteprod_left">
													<img src="images/product-img.png" alt="" />
													<h5>Smock Dress</h5>
													<p>Qty - 1</p>
												</div>
												<div class="ordsmrwithimgteprod_right">
													<p>$149.00</p>
												</div>
											</div>
									 		<div class="seemorbtnlinkcovcrt">
												<a href="#">See More</a>
											</div>
										</div>
										<div class="orderSumma-main1">
											
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Shipping Charges</p>
												</div>
												<div class="ordSummain-right">
													<p>$20.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Tax</p>
												</div>
												<div class="ordSummain-right">
													<p>$2.00</p>
												</div>
											</div>
											<div class="orderSumma-maincov1">
												<div class="ordSummain-left">
													<p>Discount</p>
												</div>
												<div class="ordSummain-right">
													<p>$0.00</p>
												</div>
											</div>
										</div>
										<div class="sumertotal-cost">
											<div class="sumertotacost-left">
												<p>TOTAL COST</p>
											</div>
											<div class="sumertotacost-right">
												<p>$469.00</p>
											</div>
										</div>
										<div class="applydiscot-main">
											<h6>Apply Discount Code</h6>
											<div class="applydiscot-form">
												<input type="text" placeholder="Enter discount code" />
												<a href="javascript:void(0);">Apply</a>
											</div>
										</div>
									</div>
								</div>
								<div class="cartcheckotpage-left">
									<div class="cartcheckotpage-title">
										<h2>Payment Methods</h2>
									</div>
									<div class="paymentmetho-main">
										<h5>All transactions are secure and encrypted.</h5>
										<div class="paymentmetho-iner">
											<div class="accordion" id="paymentcarddata">
												<div class="accordion-item">
												  	<h2 class="accordion-header" id="checkmonyorder">
														<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#creditcartacod" aria-expanded="true" aria-controls="creditcartacod">
															<span class="redbtnsetopt"></span>
															Credit card
														</button>
												  	</h2>
												  	<div id="creditcartacod" class="accordion-collapse collapse show" aria-labelledby="checkmonyorder" data-bs-parent="#paymentcarddata">
														<div class="accordion-body" style="padding-bottom: 0px;">
															<div class="cartpaymentdata-rcv">
																<div class="form-group">
																	<input type="text" class="form-control" id="" placeholder="Card Number" style="padding-right: 40px;" />
																	<i class='bx bxs-lock'></i>
																</div>
																<div class="form-group">
																	<input type="text" class="form-control" id="" placeholder="Name Of Card" />
																</div>
																<div class="row">
																	<div class="col-md-6">
																		<div class="form-group">
																			<input type="text" class="form-control" id="" placeholder="Expiration date (MM / YY)" />
																		</div>
																	</div>
																	<div class="col-md-6">
																		<div class="form-group">
																			<input type="text" class="form-control" id="" placeholder="Security code" />
																		</div>
																	</div>
																</div>
															</div>
														</div>
												  	</div>
												</div>
												{/* <!-- <div class="accordion-item">
												  	<h2 class="accordion-header" id="checkmonyorder">
														<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#checkmonyorderacod" aria-expanded="false" aria-controls="checkmonyorderacod">
															<span class="redbtnsetopt"></span>
															Check / Money order
														</button>
												  	</h2>
												  	<div id="checkmonyorderacod" class="accordion-collapse collapse" aria-labelledby="checkmonyorder" data-bs-parent="#paymentcarddata">
														<div class="accordion-body">
															
														</div>
												  	</div>
												</div> --> */}
											</div>
											<div class="plans">
												<label class="plan basic-plan" for="basic">
													<input type="radio" name="plan" id="basic" />
													<div class="plan-content">
													  	<div class="plan-details">
															<p>Check / Money order</p>
													  	</div>
													</div>
												</label>
												<label class="plan complete-plan" for="complete">
													<input type="radio" id="complete" name="plan" />
													<div class="plan-content">
													  	<div class="plan-details">
															<p>Cash on delivery</p>
													  	</div>
													</div>
												</label>
											</div>
										</div>
									</div>
									<div class="billinadderdata-cov">
										<h5>Billing address</h5>
										<div class="custom_checkbox">
											<label class="control control--checkbox">
											<p>Same as shipping address</p>
											<input type="checkbox" checked="checked" />
											<div class="control__indicator"></div>
											</label>
										</div>
										<div class="custom_checkbox">
											<label class="control control--checkbox">
											<p>Use a different billing address</p>
											<input type="checkbox" checked="checked" />
											<div class="control__indicator"></div>
											</label>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- <input type="button" name="next" class="next action-button nxtprvbtnsetmaincov1" value="Pay Now" /> --> */}
							<div class="cotcoshop-albtncart">
								<button>Pay Now</button>
								<a href="javascript:void(0);">Return to shipping</a>
							</div>
							{/* <!-- <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> --> */}
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Checkout;