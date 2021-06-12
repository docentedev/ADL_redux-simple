import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { productListSelector } from '../../store/products/selectors'

const ProductDetail = () => {
    const { id }: any = useParams()
    const productList = useSelector(productListSelector)

    const getProduct = () => {
        return productList.find(e => e.id === Number.parseInt(id))
    }

    return productList.find(e => e.id === Number.parseInt(id)) ? (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Nuevo Usuario
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products">Listado</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <label>Nombre</label>
                        <input disabled className="form-control" type="text" value={getProduct().name} />
                        <label>Precio</label>
                        <input disabled className="form-control" type="number" value={getProduct().price} />
                        <label>Descripción</label>
                        <input disabled className="form-control" type="text" value={getProduct().description} />
                        <label>Color</label>
                        <input disabled className="form-control" type="text" value={getProduct().color} />
                    </div>
                </div>
            </div>
        </div>
    ) : (
            <div>Loading...</div>
        )
}

export default ProductDetail
