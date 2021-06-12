import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../hooks/useInput'
import { Link, useHistory, useParams } from 'react-router-dom'
import { productListSelector } from '../../store/products/selectors'
import { deleteProductAction, updateProductAction } from '../../store/products/actions'

const ProductUpdate = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id }: any = useParams()
    const productList = useSelector(productListSelector)

    const [name, handlerName, setName] = useInput('')
    const [price, handlerPrice, setPrice] = useInput('')
    const [description, handlerDescription, setDescription] = useInput('')
    const [color, handlerColor, setColor] = useInput('')

    useEffect(() => {
        const p = productList.find(e => e.id === Number.parseInt(id))
        if (p) {
            setName(p.name)
            setPrice(p.price)
            setDescription(p.description)
            setColor(p.color)
        }
    }, [productList, id, setName, setPrice, setDescription, setColor])
    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(updateProductAction({
            id: Number.parseInt(id),
            name,
            price: Number.parseInt(price),
            description,
            color,
        }))
        history.push('/products')
    }

    const disabled = () => {
        return color === '' || description === '' || isNaN(Number.parseInt(price)) || name === ''
    }

    const handlerDelete = (id: any) => {
        dispatch(deleteProductAction(Number.parseInt(id)))
        history.push('/products')
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
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input className="form-control" type="text" value={name} onChange={handlerName} />
                            <label>Precio</label>
                            <input className="form-control" type="number" value={price} onChange={handlerPrice} />
                            <label>Descripción</label>
                            <input className="form-control" type="text" value={description} onChange={handlerDescription} />
                            <label>Color</label>
                            <input className="form-control" type="text" value={color} onChange={handlerColor} />
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-primary mt-3"
                                disabled={disabled()}
                            >Guardar</button>
                        </div>
                    </form>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handlerDelete(id)}
                        >Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
            <div>Loading...</div>
        )
}

export default ProductUpdate
