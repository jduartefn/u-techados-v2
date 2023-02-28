import react from 'react';
import { Link } from 'react-router-dom';
import productos from './../js/productos';

//CSS
import catalogStyle from './../breadcumbs/css/catalog.css';
//JS
import ShowFilters from './../js/ShowFilters';
const filters = (event) => {
    let button = event.target;
    let product = document.querySelectorAll('.product-container');
    let match = button.getAttribute('data');

    product.forEach(producto => {

        let filteredParent = producto.parentElement;
        let filteredNode = filteredParent.querySelectorAll(`.product-container[category=${match}]`);
        producto.classList.toggle('hide');

        filteredNode.forEach(product => {
            product.classList.remove('hide');
        })

    })


}
const ProductCatalog = () => {

    return (
        <div className="catalog-wrapper" id='content'>
            <h1 className='catalog-title'>Catalogo </h1>
            <div className="filter-mobile">
                <button onClick={ShowFilters}> Filtrar catalogo </button>
            </div>
            <div className="filter sidebar">
                <div className="sidebar-wrapper">
                    <div className="filter-column">
                        <h4> Filtros </h4>
                        <button data="techado" onClick={(filters)}>Techados </button>
                        <button data="hogar" onClick={(filters)}>Hogar </button>
                    </div>

                </div>


            </div>
            <div className="catalog-container">

                <div className="filter-wrapper">
                    <h4>Categorias</h4>

                    <div id="category-container">
                        <button data="techado" onClick={(filters)}>Techados </button>
                        <button data="hogar" onClick={(filters)}>Hogar </button>

                    </div>
                </div>
                <div className="filter-popup">
                    <div className="menu-mobile-wrapper">
                        <div className="menu-mobile side-bar" id="menuMobile">
                            <div className="mobile-wrapper">
                                <div className='mobile-links'>
                                    <button data="techado" onClick={(filters)}>Techados </button>
                                    <button data="hogar" onClick={(filters)}>Hogar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <>

                    <div className="product-grid">


                        {
                            productos.map((producto) => {
                                return <div className="product-container" key={producto.id} category={producto.category}>
                                    <img src={producto.img1} alt="img-product" />
                                    <div className="catalog-info">
                                        <Link to={`/productos/${producto.id}`}>
                                            {producto.category}
                                        </Link>
                                        <span>{producto.description}</span>
                                    </div>

                                </div>
                            })
                        }
                    </div>
                </>
            </div>
        </div>
    )

}


export default ProductCatalog;