import { useState, useRef, useEffect, } from "react"
import api from '~/axios'
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '~/store/cart/cartSlice'
import Swal from "sweetalert2"

export default function Menu() {

    // const { slug } = useParams();
    let params = useParams()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [variants, setVariants] = useState([])
    const [doughType, setDoughType] = useState([])
    const [selectedSizeId, setSelectedSizeId] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [selectedDoughId, setSelectedDoughId] = useState()
    const [defaultVariant, setDefaultVariant] = useState([])
    const [price, setPrice] = useState()
    // const [isModalOpen, setIsModalOpen] = useState(false)

    const cart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    const modalRef = useRef(null)

    // const modalRef = useRef(null);
    // let modalInstance = null;
    // const [modal, setModal] = useState(false);
    
    const imageUrl = import.meta.env.VITE_IMAGE_URL


    const showAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: 'success',
            width: '300px',
            text: 'Your item has been added',
            showConfirmButton: false,
            timer: 2000
        });
    };

    const fetchData = async () => {
        const response = await api.get(`/api/menu/${params.category}`)
        setProducts(response.data.data)
        setCategory(response.data.category)
    }

    const productDetail = async () => {
        const response = await api.get(`/api/menu/${params.category}/${params.product}`);

        setProduct(response.data.data)
        // console.log(response.data.data)
        setDoughType(response.data.doughTypes)
        setVariants(response.data.data.product_variants)

        // console.log('variants ' + response.data.data.product_variants)
        // setSelectedDoughId(response.data.data.dough_types[0].id)
        // const defaultVariant = variants?.find(v => v.is_default === 1);
    }

    const navigate = useNavigate();

    const changedSelectSize = (e) => {
        setSelectedSizeId(parseInt(e.target.value))
        const selectedVariant = variants.find(v => v.size_id === parseInt(e.target.value))
        setPrice(selectedVariant.price)
        setDefaultVariant(selectedVariant)
    }

    const changedSelectDough = (e) => {
        const dough = doughType.find(doughId => doughId.id === parseInt(e.target.value))
        setSelectedDoughId(e.target.value)

        const selectedVariant = variants.find(v => v.id === selectedSizeId)
        if (dough.price !== null) {
            setPrice(selectedVariant.price + dough.price)
            setDefaultVariant(selectedVariant)
        } else {
            setPrice(selectedVariant.price)
            setDefaultVariant(selectedVariant)
        }
    }

    const decrementQuantity = () => {
        const decreaseQuantity = quantity - 1
        setQuantity(decreaseQuantity)
    }

    const incrementQuantity = () => {
        const increaseQuantity = quantity + 1
        setQuantity(increaseQuantity)
    }

    useEffect(() => {
        fetchData()
        if (params.product) {
            productDetail()
            $('#cartModal').modal('show')
            $('#cartModal').on('hidden.bs.modal', function (event) {
                navigate(-1)
            })
            return () => {
                $('#cartModal').off('hidden.bs.modal')
            }
        }

    }, [params])


    useEffect(() => {
        if (variants && variants.length > 0) {
            const defaultVariant = variants.find(v => v.is_default === 1);

            if (defaultVariant) {
                setSelectedSizeId(defaultVariant.size_id)
                setDefaultVariant(defaultVariant)
                setPrice(defaultVariant.price)

            } else {
                setSelectedSizeId(variants[0].size_id)
                setDefaultVariant(variants[0])
            }
        }
    }, [variants])

    const { product_variants, ...rest } = product
    // console.log("rest: ", rest)
    const totalPrice = quantity * price

    return (

        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div className="row grid">
                    {products.map((product) => (
                        <div className="col-sm-6 col-lg-4" key={product.id}>
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={`${imageUrl + "/" + product.image}`} alt={product.name} />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            {product.name}
                                        </h5>
                                        <p className='toppings'>
                                            {product.toppings?.map(t => t.name).join(', ')}
                                        </p>
                                        <div className="options">
                                            <h6>
                                                {/* {product.productVariants.map(v => v.is_default)}$ */}
                                            </h6>
                                            {/* {`/menu/${category.slug}/$ */}
                                            <NavLink to={product.slug} >
                                                <button className="btn cart"
                                                // data-toggle="modal"
                                                // data-target="#cartModal"
                                                >
                                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" enableBackground="new 0 0 456.029 456.029" xmlSpace="preserve">
                                                        <g>
                                                            <g>
                                                                <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                        <g>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Begin */}
                {/* ref={modalRef} */}

                <div className="modal" ref={modalRef} id="cartModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <img src={`${imageUrl + "/" + product.image}`} className="img-fluid" alt={product.name} />
                                <h5 className="product-title text-center font-weight-bold text-lg">{product.name}</h5>
                                <div className="form-group">
                                    <label htmlFor="pizzaSize">Size</label>
                                    <select className="form-control" value={selectedSizeId} id="pizzaSize" onChange={changedSelectSize}>
                                        {variants?.map((variant) => (
                                            <option value={variant.size_id} key={variant.id}
                                            > {variant.sizes.name}
                                            </option>
                                        ))}
                                    </select>
                                    {doughType && doughType.length > 0 && (
                                        <div className="form-group">
                                            <label htmlFor="doughTypes">Dough</label>

                                            <select className="form-control" id="doughTypes" value={parseInt(selectedDoughId)} onChange={changedSelectDough}>

                                                {doughType?.map((dough) => (
                                                    <option value={dough.id} key={dough.id}
                                                    >{dough.name}
                                                    </option>
                                                )
                                                )}
                                            </select>
                                        </div>
                                    )}
                                    <div className="modal-footer">

                                        <button className="btn btn-outline-secondary"
                                            type="button" id="minus"
                                            onClick={decrementQuantity}
                                            disabled={quantity <= 1}
                                        >-</button>
                                        <input className="form-control text-center quantity" type="number" value={quantity} min="1" max="100" readOnly={true} />
                                        <button className="btn btn-outline-secondary" type="button" id="plus" onClick={incrementQuantity}>+</button>

                                        <button type="button"
                                            className="btn total"

                                            onClick={() => [dispatch(addToCart({ ...rest, quantity, totalPrice, defaultVariant })), showAlert()]}
                                        >
                                            <svg version="1.1" id="Capa_1" xmlns="http://www .w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" enableBackground="new 0 0 456.029 456.029" xmlSpace="preserve">
                                                <g>
                                                    <g>
                                                        <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                                    </g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                            </svg> <span className="price font-weight-bold">{totalPrice}$</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal End */}

                    </div>
                    {/* <div className="btn-box">
                <a href="">
                    View More
                </a>
            </div> */}
                </div>
            </div>
        </section >
    )

}