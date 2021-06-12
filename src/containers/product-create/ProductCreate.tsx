import React from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { Link, useHistory } from 'react-router-dom'
import { createProductAction } from '../../store/products/actions'

const ProductCreate = () => {
    const [name, handlerName] = useInput('')
    const [price, handlerPrice] = useInput('')
    const [description, handlerDescription] = useInput('')
    const [color, handlerColor] = useInput('')

    const dispatch = useDispatch()
    const history = useHistory()

    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(createProductAction({
            id: new Date().getTime(),
            name,
            price: Number.parseInt(price),
            description,
            color,
        }))
        history.push('/products')
    }
    
    const disabled = () => {
        return color === '' || description === '' || isNaN(Number.parseInt(price)) || name === ''
    }

    return (
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
            </div>
        </div>
    )
}

export default ProductCreate
