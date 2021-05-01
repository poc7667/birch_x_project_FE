const ProductReviews = () =>{
    return (
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <div className="tab-content mt-5" id="pills-tabContent">
                        <div className="card border-0 tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-data">
                            <p className="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                        </div>
                        <div className="card border-0 tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-info">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td style={{width: 100}}>Color</td>
                                    <td className="text-muted">Red, White, Black, Orange</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td className="text-muted">Cotton</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td className="text-muted">S, M, L, XL, XXL</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card border-0 tab-pane fade active show" id="review" role="tabpanel" aria-labelledby="review-comments">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="media-list list-unstyled mb-0">
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <a className="pe-3" href="#">
                                                        <img src="/images/client/01.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                    </a>
                                                    <div className="flex-1 commentor-detail">
                                                        <h6 className="mb-0"><a href="javascript:void(0)" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                                                        <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                </ul>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded">" Awesome product "</p>
                                            </div>
                                        </li>
                                        <li className="mt-4">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <a className="pe-3" href="#">
                                                        <img src="/images/client/02.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                    </a>
                                                    <div className="flex-1 commentor-detail">
                                                        <h6 className="mb-0"><a href="javascript:void(0)" className="media-heading text-dark">Tammy Camacho</a></h6>
                                                        <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                </ul>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded mb-0">" Good "</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>{/*end col*/}
                                <div className="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <form className="ms-lg-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h5>Add your review:</h5>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <h6 className="small fw-bold">Your Rating:</h6>
                                                <a href="javascript:void(0)" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                    </ul>
                                                </a>
                                                <a href="javascript:void(0)" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                    </ul>
                                                </a>
                                                <a href="javascript:void(0)" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                    </ul>
                                                </a>
                                                <a href="javascript:void(0)" className="d-inline-block me-3">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning" /></li>
                                                    </ul>
                                                </a>
                                                <a href="javascript:void(0)" className="d-inline-block">
                                                    <ul className="list-unstyled mb-0 small">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning" /></li>
                                                    </ul>
                                                </a>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Review:</label>
                                                    <div className="form-icon position-relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle fea icon-sm icons"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                                        <textarea id="message" placeholder="Your Comment" rows={5} name="message" className="form-control ps-5" required defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>{/*end col*/}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Name <span className="text-danger">*</span></label>
                                                    <div className="form-icon position-relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user fea icon-sm icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control ps-5" required />
                                                    </div>
                                                </div>
                                            </div>{/*end col*/}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <div className="form-icon position-relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                        <input id="email" type="email" placeholder="Email" name="email" className="form-control ps-5" required />
                                                    </div>
                                                </div>
                                            </div>{/*end col*/}
                                            <div className="col-md-12">
                                                <div className="send d-grid">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </form>{/*end form*/}
                                </div>{/*end col*/}
                            </div>{/*end row*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default ProductReviews